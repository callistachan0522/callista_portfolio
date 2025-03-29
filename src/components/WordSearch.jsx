import React, { useState, useEffect } from "react";
import styles from "./WordSearch.module.css"; // Import CSS Module

const gridSize = 10;
const words = ["PURPLE", "BADMINTON", "PIANO", "DOLPHINS", "DANCE", "DESIGN"];

const WordSearch = () => {
  const [grid, setGrid] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [foundWords, setFoundWords] = useState([]);

  useEffect(() => {
    const newGrid = Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize).fill(""));

    words.forEach((word, index) => {
      let row = index;
      for (let i = 0; i < word.length; i++) {
        newGrid[row][i] = word[i];
      }
    });

    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        if (newGrid[r][c] === "") {
          newGrid[r][c] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
      }
    }

    setGrid(newGrid);
  }, []);

  const handleCellClick = (row, col) => {
    const newSelection = [...selectedCells, { row, col }];
    setSelectedCells(newSelection);

    const selectedWord = newSelection.map(({ row, col }) => grid[row][col]).join("");

    if (words.includes(selectedWord)) {
      setFoundWords([...foundWords, selectedWord]);
      setSelectedCells([]);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Word Search About Me</h1>
      <div className={styles.grid}>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((letter, colIndex) => {
              const isSelected = selectedCells.some(cell => cell.row === rowIndex && cell.col === colIndex);
              const isFound = foundWords.some(word =>
                word.includes(letter) &&
                row.slice(0, word.length).join("") === word
              );

              return (
                <span
                  key={colIndex}
                  className={`${styles.cell} ${isSelected ? styles.selected : ""} ${isFound ? styles.found : ""}`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                >
                  {letter}
                </span>
              );
            })}
          </div>
        ))}
      </div>
      <h2 className={styles.wordListTitle}>Find the words:</h2>
      <ul className={styles.wordList}>
        {words.map((word, index) => (
          <li key={index} className={foundWords.includes(word) ? styles.completed : ""}>
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordSearch;



