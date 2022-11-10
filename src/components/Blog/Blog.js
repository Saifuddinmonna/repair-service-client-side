import React from "react";

const Blog = () => {
	return (
		<div className="text-justify">
			<div className="p-3 m-3 border rounded shadow-md bg-amber-100 text-right  ">
				<h2 className="fs-5 font-bold rounded-3xl text-center text-6xl">
					What is the difference between SQL and NoSQL?
				</h2>
				<p className="text-center  ">
					SQL is the programming language used to interface with
					relational databases. (Relational databases model data as
					records in rows and tables with logical links between them).
					NoSQL is a class of DBMs that are non-relational and
					generally do not use SQL. There are a lot of databases used
					today in the industry. Some are SQL databases, some are
					NoSQL databases. The conventional database is SQL database
					system that uses tabular relational model to represent data
					and their relationship. The NoSQL database is the newer one
					database that provides a mechanism for storage and retrieval
					of data other than tabular relations model used in
					relational databases. Following is a list of differences
					between SQL and NoSQL database:
				</p>
			</div>
			<div className="p-3 m-3 border rounded shadow-md bg-amber-100 text-right  ">
				<h2 className="fs-5 font-bold rounded-3xl text-center text-6xl">
					What Is JWT ,How JWT Works?
				</h2>
				<p className="text-center  ">
					JWT, or JSON Web Token, is an open standard used to share
					security information between two parties — a client and a
					server. Each JWT contains encoded JSON objects, including a
					set of claims. JWTs are signed using a cryptographic
					algorithm to ensure that the claims cannot be altered after
					the token is issued. For beginning developers, JSON stands
					for JavaScript Object Notation and is a text-based format
					for transmitting data across web applications. It stores
					information in an easy-to-access manner, both for developers
					and computers. It can be used as a data format by any
					programming language and is quickly becoming the preferred
					syntax for APIs, surpassing XML. JWTs differ from other web
					tokens in that they contain a set of claims. Claims are used
					to transmit information between two parties. What these
					claims are depends on the use case at hand. For example, a
					claim may assert who issued the token, how long it is valid
					for, or what permissions the client has been granted. A JWT
					is a string made up of three parts, separated by dots (.),
					and serialized using base64. In the most common
					serialization format, compact serialization, the JWT looks
					something like this: xxxxx.yyyyy.zzzzz.
				</p>
			</div>
			<div className="p-3 m-3 border rounded shadow-md bg-amber-100 text-right  ">
				<h2 className="fs-5 font-bold rounded-3xl text-center text-6xl">
					What is the difference between JavaScript and Node.js?
				</h2>
				<p className="text-center  ">
					JavaScript is a high-level programming language that makes
					our web pages and web applications dynamic and interactive
					by giving them the ability to think and act. JavaScript is a
					lightweight (easy to learn syntax) and object-oriented
					programming language whereas Node.js is a runtime
					environment built on google v8 engine and typically used to
					represent a list of objects and functions that JavaScript
					programs can access. In this post, we will walk you through
					what JavaScript and Node.js are, and then we will
					demonstrate the differences between JavaScript and Node.js.
					What is JavaScript? JavaScript’s first version was launched
					in 1995 and it was developed by Brendan Eich of Netscape
					(then called LiveScript). As discussed earlier, JavaScript
					is a high-level programming language that has all the
					functionalities normally a programming language has.
					JavaScript is an Object-oriented programming language that
					can be used on the client-side as well as on the server-side
					and developers not only use it for creating web pages but
					also it is used for game development and mobile app
					development.
				</p>
			</div>
			<div className="p-3 m-3 border rounded shadow-md bg-amber-100 text-right  ">
				<h2 className="fs-5 font-bold rounded-3xl text-center text-6xl">
					how does node js handle multiple requests at the same time
				</h2>
				<p className="text-center  ">
					How does node handle multiple requests at the same time? How
					NodeJS handle multiple client requests? NodeJS receives
					multiple client requests and places them into EventQueue.
					NodeJS is built with the concept of event-driven
					architecture. NodeJS has its own EventLoop which is an
					infinite loop that receives requests and processes them. As
					is, node. js can process upwards of 1000 requests per second
					and speed limited only to the speed of your network card.
					Note that it's 1000 requests per second not clients
					connected simultaneously. It can handle the 10000
					simultaneous clients without Sounds like, as it says, you're
					making too many requests, perhaps - how many requests are
					you making in a row with your current code? –
					CertainPerformance Nov 3, 2018 at 2:09 You need to throttle
					your requests - asana is likely limiting you. The use of
					underscore or lodash is recommended. Both have a throttle
					method to slow down the velocity of your requests. – Randy
					Casburn Nov 3, 2018 at 2:11 @CertainPerformance Apologies; I
					don't yet know how to get feedback like number of requests
					attempted. But having an idea of the data, it's probably in
					the several thousands.
				</p>
			</div>
		</div>
	);
};

export default Blog;
