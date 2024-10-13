import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4';
import Second from '../../assets/videos/second.mp4';

const CoursePage = () => {
    const { id } = useParams();
    console.log(id)
    const courses = [
        {
            id: 1,
            title: 'HTML',
            description: 'Learn the basics of web development with this beginner course.',
            image: 'https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg',
            creator: 'John Doe',
            lectures: 12,
            views: 1500,
            url: introVideo
        },
        {
            id: 2,
            title: 'Frontend',
            description: 'Step up your skills with this intermediate web development course.',
            image: 'https://cdn.pixabay.com/photo/2021/08/03/11/01/stairs-6519085_960_720.jpg',
            creator: 'Jane Smith',
            lectures: 18,
            views: 3000,
            url: Second
        },
        {
            id: 3,
            title: 'Web Development',
            description: 'Master advanced techniques in web development with this course.',
            image: 'https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg',
            creator: 'Alice Brown',
            lectures: 25,
            views: 5000,
            url: introVideo
        },
        {
            id: 4,
            title: 'Backend Development',
            description: 'Step up your skills with this intermediate web development course.',
            image: 'https://cdn.pixabay.com/photo/2021/08/03/11/01/stairs-6519085_960_720.jpg',
            creator: 'Jane Smith',
            lectures: 18,
            views: 3200,
            url: Second
        },
        {
            id: 5,
            title: 'React Js',
            description: 'Master advanced techniques in web development with this course.',
            image: 'https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg',
            creator: 'Alice Brown',
            lectures: 25,
            views: 5200,
            url: introVideo
        }
    ];

    // Use the first course as the default selected course
    const [selectedCourse, setSelectedCourse] = useState(courses[0]);

    const handleCourseClick = (course) => {
        setSelectedCourse(course);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:p-4 py-8 md:h-[100vh]">
            {/* Left Section with Video and Course Info */}
            <div className="w-full">
                <video
                    autoPlay
                    key={selectedCourse.id} // Use course ID as a key to force reload
                    controlsList="nodownload"
                    controls
                    className="w-full h-[35vh] md:h-[50vh] top-12 fixed md:relative"
                >
                    <source src={selectedCourse.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="p-4">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {selectedCourse.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{selectedCourse.description}</p>
                    <p className="text-gray-500 text-sm mb-2">
                        <strong>Instructor:</strong> {selectedCourse.creator}
                    </p>
                    <p className="text-gray-500 text-sm mb-2">
                        <strong>Lecture Number:</strong> {selectedCourse.lectures}
                    </p>
                    <p className="text-gray-500 text-sm">
                        <strong>Views:</strong> {selectedCourse.views.toLocaleString()}
                    </p>
                </div>
            </div>

            <div className="w-full grid grid-cols-1 gap-3 h-auto overflow-y-scroll">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="cursor-pointer flex items-center justify-between p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300"
                        onClick={() => handleCourseClick(course)} // Handle click to set selected course
                    >
                        <div className="h-16 w-16">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="h-full w-full object-cover rounded"
                            />
                        </div>
                        <div className="flex-1 px-4">
                            <h3 className="text-lg font-semibold">{course.title}</h3>
                            <p className="text-sm">
                                <span>Lecture Number:</span> {course.lectures}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoursePage;
