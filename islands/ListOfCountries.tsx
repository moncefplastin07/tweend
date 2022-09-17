import { useEffect, useState } from "preact/hooks";

export default function ListOfCountries() {
  const [isHide, setIsHide] = useState(true);
  const listOfCountries = [
    "ALGERIA",
    "ARGENTINA",
    "AUSTRALIA",
    "AUSTRIA",
    "BAHRAIN",
    "BELARUS",
    "BELGIUM",
    "BRAZIL",
    "CANADA",
    "CHILE",
    "COLOMBIA",
    "DENMARK",
    "DOMINICAN REPUBLIC",
    "ECUADOR",
    "EGYPT",
    "FRANCE",
    "GERMANY",
    "GHANA",
    "GREECE",
    "GUATEMALA",
    "INDIA",
    "INDONESIA",
    "IRELAND",
    "ISRAEL",
    "ITALY",
    "JAPAN",
    "JORDAN",
    "KENYA",
    "KOREA",
    "KUWAIT",
    "LATVIA",
    "LEBANON",
    "MALAYSIA",
    "MEXICO",
    "NETHERLANDS",
    "NEW ZEALAND",
    "NIGERIA",
    "NORWAY",
    "OMAN",
    "PAKISTAN",
    "PANAMA",
    "PERU",
    "PHILIPPINES",
    "POLAND",
    "PORTUGAL",
    "PUERTO RICO",
    "QATAR",
    "RUSSIA",
    "SAUDI ARABIA",
    "SINGAPORE",
    "SOUTH AFRICA",
    "SPAIN",
    "SWEDEN",
    "SWITZERLAND",
    "THAILAND",
    "TURKEY",
    "UKRAINE",
    "UNITED ARAB EMIRATES",
    "UNITED KINGDOM",
    "UNITED STATES",
    "VENEZUELA",
    "VIETNAM",
  ];

  return (
    <div className={``}>
      <button
        className={`outline-none text-4xl z-50 transform  duration-200 ease-in-out fixed right-12	top-14`}
        onClick={() => setIsHide(!isHide)}
      >
        <img src="./international-delivery.png" className={`h-12 w-12`} />
      </button>
      <div
        className={`absolute z-40 bg-white dark:bg-[#1e293b] w-full pb-3 ${
          isHide ? "hidden" : ""
        }`}
      >
        <ul className={`grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-3 `}>
          {listOfCountries.map((countryName) => (
            <li>
              <a
                className={`capitalize `}
                href={countryName.toLowerCase().replace(" ", "-")}
              >
                {countryName.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
