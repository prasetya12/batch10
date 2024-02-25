import Header from "../components/Header";
import Card from "../components/Card";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";

import {
  fetchDataCall,
  searchDataCall,
  fetchDataByCategoryCall,
} from "../services/product.service";
import Badge from "../components/Badge";

import { useDispatch } from "react-redux";
import { getProductCall } from "../store/actions/productAction";
import ListCard from "../components/ListCard";

export default function HomePages() {
  const dispatch = useDispatch();

  const [dataProducts, setDataProducts] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [activeMenu, setActiveMenu] = useState("all");
  const [listMenu, setListMenu] = useState([
    {
      label: "All",
      value: "all",
    },
    {
      label: "Smartphone",
      value: "smartphones",
    },
    {
      label: "Laptops",
      value: "laptops",
    },
    {
      label: "Fragrances",
      value: "fragrances",
    },
    {
      label: "Home Decoration",
      value: "home-decoration",
    },
  ]);

  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     const data = await fetchDataCall();
  //     if (data.data.products) {
  //       setIsLoading(false);
  //       setDataProducts(data.data.products);
  //     }
  //   };

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

  const onClickMenu = async (menu) => {
    if (menu.value == "all") {
      fetchData();
    } else {
      const data = await fetchDataByCategoryCall(menu.value);
      setDataProducts(data.data.products);
    }
    setActiveMenu(menu.value);
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      searchData(searchValue);
    }, 2000);

    return () => clearTimeout(delayDebounce);
  }, [searchValue]);

  useEffect(() => {
    // fetchData();
    dispatch(getProductCall());
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
          {/* LIST MENU CATEGORY */}
          <div className="flex mb-3 gap-3">
            {listMenu.map((menu, index) => (
              <div
                className="cursor-pointer"
                key={index}
                onClick={() => onClickMenu(menu)}
              >
                <Badge
                  title={menu.label}
                  active={menu.value == activeMenu ? true : false}
                />
              </div>
            ))}
          </div>

          <ListCard />
          {/* {data.map((item, index) => (
              <Card product={item} key={index} />
            ))} */}
        </div>
      </div>
    </>
  );
}
