import React, { useState } from 'react';

const SuggestionsComponent = () => {
  const [selectedDays, setSelectedDays] = useState(1);

  const handleDaysChange = (e) => {
    setSelectedDays(parseInt(e.target.value));
  };

  const getDestinationSuggestion = () => {
    if (selectedDays === 1) {
      return 'Uludağ\'da kayak yapabilirsin :)';
    } else if (selectedDays === 2) {
      return 'Kozahan\'da közde kahve içebilirsin :)';
    } else if (selectedDays === 3) {
      return 'Cumalıkızık\'da kahvaltı yapabilirsin :)';
    } else {
      return 'Gölyazı\'daki Ağlayan Çınar\'ı mutlaka görmelisin :)';
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <label className="block text-gray-700 text-lg mb-2">
        Tarih Aralığı Seçiniz:
      </label>
      <select
        className="p-2 border border-gray-300 rounded"
        onChange={handleDaysChange}
        value={selectedDays}
      >
        <option value={1}>1. gün</option>
        <option value={2}>2. gün</option>
        <option value={3}>3. gün</option>
        <option value={4}>4 gün ve fazla</option>
      </select>

      <div className="mt-4">
        <p className="text-lg mt-2">
          Öneri: {getDestinationSuggestion()}
        </p>
      </div>
    </div>
  );
};

export default SuggestionsComponent;