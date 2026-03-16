import React from "react";

const SideBardCurrencyConverter = () => {
      const res = fetch("https://api.frankfurter.dev/v1/latest?base=HKD&symbols=JPY");
      // const data = res.json();
      // setCurrencies(Object.keys(data));
      console.log(res);
      // console.log(data);
      // console.log(currencies);

  return (
    <div className="currency-widget" id="currencyWidget" data-target="JPY">
      <h4>Currency Converter</h4>
      <div className="converter-inputs">
        <div className="input-group">
          <label>HKD (Hong Kong Dollar)</label>
          <input type="number" id="hkdInput" placeholder="0.00" />
        </div>
        <div className="input-group">
          <label>JPY (Japanese Yen)</label>
          <input type="number" id="localInput" placeholder="0.00" />
        </div>
      </div>
      <div className="exchange-rate-info" id="rateInfo">
        Fetching latest rates...
      </div>
    </div>
  );
};

export default SideBardCurrencyConverter;
