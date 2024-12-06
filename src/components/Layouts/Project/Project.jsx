import React, { useEffect, useState } from 'react'
import projectImage from "../../../assets/project.jpg"

const Project = () => {
   const projects = [
      {
        description: "This is a sample project description.",
        imageSrc: projectImage,
        githubLink: "https://github.com/username/project1",
        deployLink: "https://username.github.io/project1",
      },
      {
        description: "Another sample project description.",
        imageSrc: projectImage,
        githubLink: "https://github.com/username/project2",
        deployLink: "https://username.github.io/project2",
      },
      {
        description: "A third project description goes here.",
        imageSrc: projectImage,
        githubLink: "https://github.com/username/project3",
        deployLink: "https://username.github.io/project3",
      },
   ];
  
    return (
      <div className="min-h-screen p-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition-shadow"
            >
              <img
                src={project.imageSrc}
                alt="Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.githubLink}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.deployLink}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Deploy
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Project
