import Header from "../components/Header";
import Card from "../components/Card";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";

import { fetchDataCall, searchDataCall } from "../services/product.service";

export default function HomePages() {
  const [dataProducts, setDataProducts] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetchDataCall();
    if (data.data.products) {
      setIsLoading(false);
      setDataProducts(data.data.products);
    }
  };

  const searchData = async (query) => {
    setIsLoading(true);
    const data = await searchDataCall(query);
    if (data.data.products) {
      setIsLoading(false);
      setDataProducts(data.data.products);
    }
  };

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
    // searchData(e.target.value);
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      searchData(searchValue);
    }, 2000);

    return () => clearTimeout(delayDebounce);
  }, [searchValue]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />

      <div className="p-10">
        <div className="flex justify-center">
          <div className="flex border-2 border-grey bg-gray-50 pl-2 rounded-xl w-80">
            <div className="flex items-center">
              <BsSearch className="text-2xl" />
            </div>
            <input
              type="search"
              id="default-search"
              className=" w-full p-4 pl-10 text-sm text-gray-900 focus:border-grey focus:border-0  rounded-lg bg-gray-50 "
              placeholder="Search ..."
              onChange={onChangeSearch}
              value={searchValue}
            />
          </div>
        </div>

        <div className="mt-10">
          {isLoading ? "Loading..." : <></>}
          {!isLoading && dataProducts.length == 0 ? "Data Not Found" : <></>}
          <div className=" grid grid-cols-4 gap-2">
            {dataProducts.map((item, index) => (
              <Card product={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
