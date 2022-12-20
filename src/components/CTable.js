import React from "react";
import { cats } from "./Data";
export default function CTable() {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Breed</th>
            <th scope="col">Age ( months )</th>
          </tr>
        </thead>
        <tbody>
          {cats.map &&
            cats.map((u, index) => {
              return (
                <tr key={index}>
                  <td>{u.name}</td>
                  <td>{u.breed}</td>
                  <td>{u.age}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
