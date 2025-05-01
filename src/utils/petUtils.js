// 3. Mengambil hewan kesayangan Esa secara ascending atau descending
export const sortPetsByFavorite = (pets, favorites, ascending = true) => {
  return pets
    .filter((pet) => favorites.includes(pet.nama))
    .sort((a, b) =>
      ascending ? a.nama.localeCompare(b.nama) : b.nama.localeCompare(a.nama)
    );
};

// 4. Mengganti kucing Persia menjadi kucing Maine Coon
export const replacePersianCat = (pets) => {
  return pets.map((pet) =>
    pet.nama === "Luna" && pet.ras === "Persia"
      ? { ...pet, ras: "Maine Coon" }
      : pet
  );
};

// 5. Menghitung jumlah hewan berdasarkan jenisnya
export const countPetsByType = (pets, type) => {
  return pets.filter((pet) => pet.jenis === type).length;
};

// 6. Mengecek hewan yang mengandung palindrome beserta panjangnya
export const checkPalindromePets = (pets) => {
  return pets
    .filter((pet) => {
      const name = pet.nama.toLowerCase();
      const reversedName = name.split("").reverse().join("");
      return name === reversedName;
    })
    .map((pet) => ({
      nama: pet.nama,
      panjang: pet.nama.length,
    }));
};

// 7. Menjumlahkan bilangan genap dari array yang diberikan
export const sumEvenNumbers = (arr) => {
  const evenNumbers = arr.filter((num) => num % 2 === 0);
  const sum = evenNumbers.reduce((acc, num) => acc + num, 0);
  return { sum, evenNumbers };
};

// 8. Mengecek apakah dua string adalah anagram
export const areAnagrams = (str1, str2) => {
  const normalize = (str) => str.toLowerCase().split("").sort().join("");
  return normalize(str1) === normalize(str2);
};

// 9. Memformat JSON (Case menjadi Expectation)
export const formatJSON = (pets) => {
  const groupedPets = pets.reduce((acc, pet) => {
    const category = pet.jenis;
    const breedCode = `${pet.ras.slice(0, 2).toUpperCase()}01`;

    if (!acc[category]) {
      acc[category] = { total: 0, data: {} };
    }
    if (!acc[category].data[breedCode]) {
      acc[category].data[breedCode] = { total: 0, data: [] };
    }

    acc[category].total += 1;
    acc[category].data[breedCode].total += 1;
    acc[category].data[breedCode].data.push({
      name: pet.nama,
      ras: pet.ras,
      total: 1,
    });

    return acc;
  }, {});

  const formatted = Object.keys(groupedPets).map((category) => ({
    category,
    total: groupedPets[category].total,
    data: groupedPets[category].data,
  }));

  const totalAllPets = pets.length;

  return {
    total: totalAllPets,
    data: formatted,
  };
};
