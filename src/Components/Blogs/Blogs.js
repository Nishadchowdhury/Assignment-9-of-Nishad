import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='font-semibold text-5xl'>Some Important Answers</h1>

            <div className='mt-5'>
                <h1 className='font-semibold text-3xl' >Q-1. What Is Context Api ?</h1>
                <p>Ans:- React Context API is way more Better Alternative of prop drilling. <br />
                by using React Context api we can pass data , grandparent to any level's of child . <br />
                it's work's like global variable . we can Receive data at any child <br />
                by calling Specific name of context API . <br />
                but we must export it to get access from other child elements.
                </p> <br />
                
                <h1 className='font-semibold text-3xl' >Q-2. What Is Semantic ?</h1>
                <p>Semantic tag Is specifically made to store specific kind of data , <br />
                like <strong> Nav</strong> for Navigation's part of any site , <strong>Time</strong> to place data about time ,<br />
                it's improve Human readability about code . That's why developers can understand code easily . <br />
                and Developers can easily guess the type of data stored in element . <br />
                html provide lots of Semantic tags to make the code Readable .
                 </p>

            </div>
        </div>
    );
};

export default Blogs;