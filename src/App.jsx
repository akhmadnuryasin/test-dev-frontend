import React, { useState } from "react";
import { initialPets } from "./data/initialPets";
import {
  sortPetsByFavorite,
  replacePersianCat,
  countPetsByType,
  checkPalindromePets,
  sumEvenNumbers,
  areAnagrams,
  formatJSON,
} from "./utils/petUtils";

const App = () => {
  const [pets, setPets] = useState(initialPets);
  const [isAscending, setIsAscending] = useState(true);
  const [anagramStrings, setAnagramStrings] = useState({ str1: "", str2: "" });

  // 2. Menambah hewan peliharaan baru (Badak Jawa Rino)
  const addPet = () => {
    const newAnimal = {
      jenis: "Badak",
      ras: "Jawa",
      nama: "Rino",
      karakteristik: "Pekerja keras dan kesayangan Esa",
    };
    setPets([...pets, newAnimal]);
  };

  const favorites = ["Otto", "Luna", "Milo", "Max", "Rino"];
  const sortedFavoritePets = sortPetsByFavorite(pets, favorites, isAscending);
  const palindromePets = checkPalindromePets(pets);
  const evenNumbersResult = sumEvenNumbers([15, 18, 3, 9, 6, 2, 12, 14]);
  const formattedJSON = formatJSON(pets);

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-8">
        Manajemen Hewan Peliharaan Esa
      </h1>

      {/* Input for adding new pet */}
      <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Tambah Hewan Peliharaan Baru (Rino)
        </h2>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md"
          onClick={addPet}
        >
          Tambah Rino (Badak Jawa)
        </button>
      </div>

      {/* Sort Pets by Favorite */}
      <h2 className="text-2xl font-semibold mb-4">Urutkan Hewan Kesayangan</h2>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md mb-4"
        onClick={() => setIsAscending(true)}
      >
        Ascending
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md mb-4 ml-2"
        onClick={() => setIsAscending(false)}
      >
        Descending
      </button>
      <ul className="list-disc pl-5">
        {sortedFavoritePets.map((pet, index) => (
          <li key={index} className="text-lg">
            {pet.nama} ({pet.ras})
          </li>
        ))}
      </ul>

      {/* Replace Persian Cat with Maine Coon */}
      <button
        className="bg-yellow-500 text-white px-6 py-2 rounded-md mt-4"
        onClick={() => setPets(replacePersianCat(pets))}
      >
        Ganti Kucing Persia Menjadi Maine Coon
      </button>

      {/* Count Pets by Type */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Jumlah Hewan Berdasarkan Jenis
      </h2>
      <p className="text-lg">Anjing: {countPetsByType(pets, "Anjing")}</p>
      <p className="text-lg">Kucing: {countPetsByType(pets, "Kucing")}</p>
      <p className="text-lg">Ikan: {countPetsByType(pets, "Ikan")}</p>

      {/* Palindrome Pets */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Hewan dengan Nama Palindrome
      </h2>
      <ul className="list-disc pl-5">
        {palindromePets.map((pet, index) => (
          <li key={index} className="text-lg">
            {pet.nama} - Panjang: {pet.panjang}
          </li>
        ))}
      </ul>

      {/* Even Numbers */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Jumlahkan Bilangan Genap
      </h2>
      <p className="text-lg">
        Bilangan Genap: {evenNumbersResult.evenNumbers.join(", ")}
      </p>
      <p className="text-lg">Jumlah: {evenNumbersResult.sum}</p>

      {/* Anagram Check */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Cek Anagram</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="String 1"
          className="p-2 border rounded-md mr-2"
          value={anagramStrings.str1}
          onChange={(e) =>
            setAnagramStrings({ ...anagramStrings, str1: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="String 2"
          className="p-2 border rounded-md"
          value={anagramStrings.str2}
          onChange={(e) =>
            setAnagramStrings({ ...anagramStrings, str2: e.target.value })
          }
        />
      </div>
      <p className="text-lg">
        {areAnagrams(anagramStrings.str1, anagramStrings.str2)
          ? "Anagram"
          : "Bukan Anagram"}
      </p>

      {/* JSON Output */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Formatted JSON:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm shadow-inner">
        {JSON.stringify(formattedJSON, null, 2)}
      </pre>
    </div>
  );
};

export default App;
