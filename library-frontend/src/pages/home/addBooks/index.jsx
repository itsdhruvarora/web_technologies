import React, { useRef } from 'react';
import { StyledHeader } from './styles';
import Button from './../../../common/components/button';

const AddBooks = () => {
    const nameRef = useRef(null);
    const authorNameRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        let dataToSubmit = {
            name: nameRef.current.value,
            authorName: authorNameRef.current.value,
        };

        fetch('http://localhost:3001/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSubmit),
        })
            .then((response) => response.json())
            .then((data) =>
                console.log('The created and retubed data is. ', data)
            );
    };

    return (
        <>
            <StyledHeader>Add Books</StyledHeader>
            <form>
                <div className="row">
                    <div className="offset-md-1 col-md-5">
                        <div className="mb-3">
                            <label for="name" class="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                ref={nameRef}
                                aria-describedby="name"
                                placeholder="Enter book name"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-1 col-md-5">
                        <div className="mb-3">
                            <label for="name" class="form-label">
                                Author Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="authorName"
                                ref={authorNameRef}
                                aria-describedby="authorName"
                                placeholder="Enter Author name"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-1 col-md-5">
                        <Button label="Submit" clickHandler={handleSubmit} />
                    </div>
                </div>
            </form>
        </>
    );
};

export default AddBooks;
