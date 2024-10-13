import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const ResponsiveCards = () => {
    const [searchQuery, setSearchQuery] = useState(""); // State for the search query

    const courses = [
        {
            id: 1,
            title: "HTML",
            description: "Learn the basics of web development with this beginner course.",
            image: "https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg",
            creator: "John Doe",
            lectures: 12,
            views: 1500,
        },
        {
            id: 2,
            title: "Frontend",
            description: "Step up your skills with this intermediate web development course.",
            image: "https://cdn.pixabay.com/photo/2021/08/03/11/01/stairs-6519085_960_720.jpg",
            creator: "Jane Smith",
            lectures: 18,
            views: 3000,
        },
        {
            id: 3,
            title: "Web Development",
            description: "Master advanced techniques in web development with this course.",
            image: "https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg",
            creator: "Alice Brown",
            lectures: 25,
            views: 5000,
        },
        {
            id: 4,
            title: "Backend Development",
            description: "Step up your skills with this intermediate web development course.",
            image: "https://cdn.pixabay.com/photo/2021/08/03/11/01/stairs-6519085_960_720.jpg",
            creator: "Jane Smith",
            lectures: 18,
            views: 3200,
        },
        {
            id: 5,
            title: "React Js",
            description: "Master advanced techniques in web development with this course.",
            image: "https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg",
            creator: "Alice Brown",
            lectures: 25,
            views: 5200,
        },
    ];

    // Filter courses based on the search query
    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handler for searching courses
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    // Handler for watching a course
    const handleWatchNow = (courseId) => {
        console.log(`Watch Now clicked for course ID: ${courseId}`);
        // Add logic to handle watching the course (e.g., navigate to course detail page)
    };

    // Handler for adding a course to the playlist
    const handleAddToPlaylist = (courseId) => {
        console.log(`Add to playlist clicked for course ID: ${courseId}`);
        // Add logic to handle adding to the playlist
    };

    return (
        <div className="pt-32">
            {/* Search Input */}
            <div className="relative w-full max-w-xl mx-auto bg-white rounded-full mb-8">
                <input
                    type="text"
                    placeholder="Search by title"
                    value={searchQuery} // Bind input to state
                    onChange={handleSearch} // Update state on input change
                    className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-16 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-purple-300 focus:border-purple-300"
                />
                <button
                    type="submit"
                    className="absolute inline-flex items-center justify-center h-12 w-12 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-2 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                    <IoSearch className="w-5 h-5" />
                </button>
            </div>

            {/* Courses Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">OUR COURSES</h2>
                <div className="flex flex-wrap -mx-4 justify-center">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <div
                                key={course.id}
                                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8"
                                style={{ height: "450px", width: "300px" }} // Adjusted height for additional info
                            >
                                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 h-full w-full flex flex-col">
                                    <div className="relative h-2/3 w-full">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4 flex-1 flex flex-col justify-between text-sm">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                                        <p className="text-gray-600 mb-2">{course.description}</p>
                                        <p className="text-gray-500 text-sm mb-2"><strong>Instructor:</strong> {course.creator}</p>
                                        <p className="text-gray-500 text-sm mb-2"><strong>Lectures: </strong>{course.lectures}</p>
                                        <p className="text-gray-500 text-sm mb-4"><strong>Views:</strong> {course.views.toLocaleString()}</p>
                                        <div className="flex justify-between">
                                            <button
                                                onClick={() => handleWatchNow(course.id)} // Attach watch handler
                                                className="text-xs font-semibold inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-1 px-4 rounded self-start"
                                            >
                                                Watch Now
                                            </button>
                                            <button
                                                onClick={() => handleAddToPlaylist(course.id)} // Attach add to playlist handler
                                                className="text-xs font-semibold inline-block border border-purple-600 text-purple-700 py-1 px-4 rounded-lg self-start"
                                            >
                                                Add to playlist
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No courses found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResponsiveCards;
