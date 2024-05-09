import { Table, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import GiveReviews from './GiveReviews';

export default function ReviewForm() {
  const [reviews, setReviews] = useState([]);

  const handleReview = (review) => {
    setReviews([...reviews, review]); // Add the new review to the existing reviews array
  };

  return (
    <div style={{ margin: "auto", maxWidth: "800px", marginTop: "10%" }}>
      <h2 style={{ marginBottom: "10px" }}>Reviews</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>Provide Feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{review.name}</td>
              <td>{review.speciality}</td>
              <td>{review.review}</td>
              <td>{review.rating}</td>
            </tr>
          ))}
          <tr>
            <td>1</td>
            <td>Dr. Michael Loe</td>
            <td>Cardiology</td>
            <td>
              <GiveReviews onHandleReview={handleReview} />
            </td>
            <td></td>
          </tr>
          {/* Other table rows */}
        </tbody>
      </Table>
    </div>
  );
}
