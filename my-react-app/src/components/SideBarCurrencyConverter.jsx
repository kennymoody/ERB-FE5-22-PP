import React, { useEffect, useState } from "react";

const SideBardCurrencyConverter = ({ currencyfrom, currencyto, currency }) => {
  const base_url = "https://api.frankfurter.dev/v1/latest?";
  const [exchangeRate, setExchangeRate] = useState(null);
  const [amount, setAmount] = useState(1);
  const [isFrom, setIsFrom] = useState(true);
  const fetchData = async () => {
    try {
      let res = await fetch(
        `${base_url}base=${currencyfrom}&symbols=${currencyto}`,
      );
      if (!res.ok) throw new Error("API error");

      let jsondata = await res.json();
      console.log(jsondata);

      setExchangeRate(jsondata.rates[currencyto]);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  let fromAmount, toAmount;
  if (isFrom) {
    fromAmount = amount;
    toAmount = (amount * exchangeRate).toFixed(2);
  } else {
    toAmount = amount;
    fromAmount = (amount / exchangeRate).toFixed(2);
  }

  const handleFromChange = (e) => {
    setAmount(e.target.value);
    setIsFrom(true);
  };

  const handleToChange = (e) => {
    setAmount(e.target.value);
    setIsFrom(false);
  };

  if (!exchangeRate) return <div>Loading...</div>;

  return (
    <div className="currency-widget" id="currencyWidget" data-target="JPY">
      <h4>Currency Converter</h4>
      <div className="converter-inputs">
        <div className="input-group">
          <label>HKD (Hong Kong Dollar)</label>
          <input
            type="number"
            value={fromAmount}
            onChange={handleFromChange}
            placeholder="0.00"
            id="hkdInput"
          />
        </div>
        <div className="input-group">
          <label>{currency}</label>
          <input
            type="number"
            value={toAmount}
            placeholder="0.00"
            id="localInput"
            onChange={handleToChange}
          />
        </div>
      </div>
      <div className="exchange-rate-info" id="rateInfo">
       1 HKD = {exchangeRate.toFixed(2)} {currencyto}
      </div>
    </div>
  );
};

export default SideBardCurrencyConverter;