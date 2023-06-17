import React from "react";
import { FaCode } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";

const Blog = () => {
  const blogs = [
    {
      title: "JavaScript Story",
      icon: FaCode,
      content: `JavaScript is a high-level programming language that is primarily used for creating interactive web pages and web applications. It was developed by Brendan Eich at Netscape Communications in 1995 and has since become one of the most popular programming languages in the world.

      JavaScript is a versatile language that can be used for both front-end and back-end development. It allows developers to add dynamic and interactive elements to websites, such as form validation, interactive maps, and responsive design. It is also widely used in frameworks like React and Angular to build robust and scalable web applications.

      With its easy-to-learn syntax and extensive library ecosystem, JavaScript has become an essential tool for web developers. It supports object-oriented, functional, and imperative programming paradigms, making it a flexible language for various use cases.

      In recent years, JavaScript has expanded beyond the web browser and entered other domains, such as server-side development (Node.js), desktop application development (Electron), and mobile app development (React Native). Its versatility and widespread adoption make it a valuable skill for developers across different platforms and industries.`,
    },
    {
      title: "Python Story",
      icon: FaCode,
      content: `Python is a high-level programming language known for its simplicity and readability. It was created by Guido van Rossum and first released in 1991. Python emphasizes code readability and allows developers to express concepts in fewer lines of code compared to other languages.

      Python has a large and active community of developers who contribute to its extensive library ecosystem. The Python Standard Library provides a wide range of modules for tasks such as web development, data analysis, artificial intelligence, and scientific computing. Popular frameworks like Django and Flask make web development in Python efficient and straightforward.

      One of Python's notable features is its focus on code readability, which is achieved through the use of indentation and a clean syntax. This makes Python code easy to understand and maintain, even for beginners. Python's versatility enables developers to work on various projects, from web development and data analysis to machine learning and automation.

      Python's popularity has skyrocketed in recent years, driven by its use in emerging technologies like machine learning and data science. With libraries such as NumPy, Pandas, and TensorFlow, Python has become the go-to language for data manipulation, analysis, and building machine learning models. It is also widely used in areas such as web scraping, natural language processing, and robotics.`,
    },
    {
      title: "Java Story",
      icon: FaCode,
      content: `Java is a general-purpose programming language that is widely used for building enterprise-level applications. Developed by Sun Microsystems (now owned by Oracle) in the mid-1990s, Java was designed to be platform-independent and highly scalable.

      One of Java's key features is its "write once, run anywhere" principle. Java code can be compiled into bytecode, which can then be executed on any platform that has a Java Virtual Machine (JVM). This cross-platform compatibility makes Java suitable for developing applications that can run on different operating systems and devices.

      Java's robustness, reliability, and security have made it a popular choice for large-scale projects. It has a rich set of libraries and frameworks, such as Spring, Hibernate, and JavaFX, that simplify development tasks and accelerate the creation of complex applications. Java's object-oriented programming approach allows for modular and maintainable code, making it suitable for collaborative development.

      Java is also widely used in Android app development. Android Studio, the official integrated development environment (IDE) for Android, is built on Java. Developers can leverage their Java skills to create powerful and feature-rich mobile applications for the Android platform.

      Despite being over two decades old, Java remains a prominent language in the software industry. It powers numerous mission-critical systems, including banking applications, e-commerce platforms, and enterprise-level software solutions.`,
    },
    // Add more programming languages here
    {
      title: "Ruby Story",
      icon: FaCode,
      content: `Ruby is a dynamic, object-oriented programming language known for its elegant syntax and developer-friendly features. It was created by Yukihiro Matsumoto in the mid-1990s with the goal of enhancing developer productivity and happiness.

      Ruby has a clean and expressive syntax that prioritizes readability and simplicity. It emphasizes the principle of "least surprise," aiming to provide a programming experience that aligns with developers' expectations. Ruby's syntax and design philosophy make it easy to write clean and maintainable code.

      Ruby gained popularity with the advent of the Ruby on Rails web framework. Ruby on Rails, often referred to as Rails, is a powerful framework that follows the Model-View-Controller (MVC) architectural pattern. Rails embraces convention over configuration, enabling developers to build web applications rapidly.

      Ruby's focus on developer happiness extends beyond its syntax and framework. It has a vibrant and supportive community that promotes collaboration and open-source contributions. The RubyGems package manager and the Ruby Toolbox provide a vast ecosystem of libraries and tools for various purposes.

      While Ruby is commonly associated with web development, it is a versatile language that can be used for scripting, automation, and even game development. Ruby's flexibility, combined with its strong emphasis on developer experience, has made it a popular choice among developers who value productivity and code readability.`,
    },
    {
      title: "Go Story",
      icon: FaCode,
      content: `Go, also known as Golang, is a statically typed compiled language designed for concurrency and scalability. It was created by a team at Google, including Robert Griesemer, Rob Pike, and Ken Thompson, and first appeared in 2009. Go was developed to address the shortcomings of existing languages while providing a simple and efficient development experience.

      Go combines the performance of a low-level language like C or C++ with the ease of use of a high-level language like Python or JavaScript. It features a garbage collector, strong typing, and a concurrent programming model that allows developers to efficiently utilize multiple processor cores.

      Go's simplicity is reflected in its minimalistic syntax and standard library. The language favors clarity and readability, making it easier to write, read, and maintain code. Go's built-in support for concurrent programming through goroutines and channels enables developers to create highly scalable and efficient applications.

      Go has gained traction in various domains, including web development, networking, cloud computing, and system programming. Its efficient performance, small memory footprint, and straightforward deployment make it an excellent choice for building microservices and distributed systems.

      With a growing community and increasing adoption, Go has become a go-to language for projects that require both performance and productivity. It is often favored by developers who value simplicity, efficiency, and ease of deployment.`,
    },
    {
      title: "Swift Story",
      icon: FaCode,
      content: `Swift is a modern programming language developed by Apple for building iOS, macOS, watchOS, and tvOS applications. It was introduced in 2014 as a replacement for Objective-C and has quickly gained popularity among developers.

      Swift combines the best features of various programming languages while introducing new concepts and syntax. It is designed to be safe, fast, and expressive. Swift's syntax is concise and expressive, allowing developers to write clean and readable code. It also includes powerful features like optionals, generics, and type inference.

      One of Swift's primary goals is to enhance developer productivity. It achieves this through features such as automatic memory management, type safety, and interactive playgrounds that enable real-time code experimentation and visualization.

      Swift is not limited to iOS and macOS development. It has also been open-sourced, enabling its use on other platforms and fostering community contributions. Swift can be used for server-side development, creating command-line tools, and even building applications for Linux.

      With Apple's continued support and a growing community, Swift has become the preferred language for developing applications across Apple's ecosystem. Its combination of performance, safety, and modern language features makes it a valuable tool for developers targeting Apple platforms.`,
    },
    {
      title: "C++ Story",
      icon: FaCode,
      content: `C++ is a powerful and widely used programming language that is an extension of the C programming language. It was developed by Bjarne Stroustrup in the early 1980s and has since become a standard language for systems programming, game development, and high-performance applications.

      C++ builds upon the procedural programming paradigm of C and introduces object-oriented programming (OOP) concepts. It supports features such as classes, inheritance, polymorphism, and encapsulation. These OOP features enable developers to create modular and reusable code, making it easier to manage and maintain complex projects.

      One of C++'s defining features is its emphasis on performance. It provides low-level control over hardware resources and allows for efficient memory management. C++ is often used in performance-critical applications like game engines, embedded systems, and scientific simulations.

      C++ also has a rich standard library that provides a wide range of functionalities, including data structures, algorithms, and input/output operations. Additionally, numerous third-party libraries and frameworks extend C++'s capabilities and simplify development in various domains.

      While C++ can be complex and requires a deeper understanding of programming concepts, it provides developers with significant flexibility and control. Its widespread usage and compatibility with existing C codebases make it a valuable language for projects that demand performance and portability.`,
    },
    {
      title: "Rust Story",
      icon: FaCode,
      content: `Rust is a modern systems programming language focused on safety, speed, and concurrency. It was created by Mozilla Research and first appeared in 2010. Rust aims to provide a reliable alternative to C and C++ while addressing common issues like memory safety and data race conditions.

      Rust's key feature is its ownership system, which enables fine-grained memory management without the need for a garbage collector. The ownership system prevents common programming errors such as null pointer dereferences, data races, and memory leaks. Rust also enforces strict compile-time checks to ensure memory safety and thread-safety.

      In addition to its safety features, Rust emphasizes performance. It compiles to highly efficient machine code and provides control over low-level details. Rust's focus on zero-cost abstractions enables developers to write code that is both safe and fast.

      Rust has gained popularity for various use cases, including systems programming, web development, and networking. It is particularly well-suited for projects that require both high performance and reliability, such as browser engines, operating systems, and embedded systems.

      With an active and supportive community, Rust continues to evolve and improve. Its growing ecosystem of libraries and frameworks makes it increasingly accessible for developers looking for a safer alternative to traditional systems programming languages.`,
    },
  ];

  return (
    <div className="container mx-auto py-8 mt-14">
      <SectionTitle 
        subHeading={""}
        heading={"Programming Language Blog"}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <AnimatePresence>
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-lg shadow p-4 flex items-center"
            >
              <blog.icon className="mr-4 text-blue-500" />
              <div className=" space-y-5">
                <h2 className="text-xl text-center font-bold">{blog.title}</h2>
                <p className="text-gray-600">{blog.content}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Blog;


