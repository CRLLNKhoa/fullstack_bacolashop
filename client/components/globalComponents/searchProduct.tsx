"use client";
import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import Link from "next/link";
import { cn } from "@/lib/utils";
import "./searchProduct.css"

interface User {
  id: number;
  name: string;
}

export default function SearchProduct() {
  const fetchUsers = async (searchValue: string): Promise<User[]> => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${searchValue}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return response.json();
  };
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchValue] = useDebounce(searchTerm, 500);
  const { data, isLoading, error } = useQuery({
    queryKey: [searchValue],
    queryFn: () => fetchUsers(searchValue),
  });
  return (
    <div className="h-[60px] w-[554px] relative rounded-lg px-8 bg-[#F3F4F7] flex items-center gap-4">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        className="h-full w-full outline-none bg-transparent inputSearch"
        placeholder="Search for products..."
      />
      {isLoading ? (
        <AiOutlineLoading3Quarters className="w-7 h-7 animate-spin" />
      ) : (
        <RiSearchLine className="w-7 h-7 text-muted-foreground cursor-pointer hover:text-background-second duration-500" />
      )}
      <div className={cn("searchResult invisible absolute top-[105%] left-0 right-0 rounded-lg border p-2 w-full max-h-[240px] overflow-y-auto",searchValue !== "" && "visible")}>
        {data?.length === 0 && searchValue !== "" && (
          <p>Product "{searchValue}" not found!</p>
        )}
        {isLoading && <p>Searching...</p>}
        <ul>
          {data?.map((user: User) => (
            <li key={user.id}>
             <Link href={`/product/${user.id}`} className="flex items-center gap-4 py-2 group">
                  <div className="w-[42px] h-[42px] flex items-center justify-center border rounded-md overflow-hidden">
                    <img
                      className="w-[40px] h-[40px]"
                      src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-51-90x90.jpg"
                      alt={String(user.id)}
                    />
                  </div>
                  <h2 className="font-semibold line-clamp-1 flex-1 group-hover:underline group-hover:text-background-second underline-offset-4 duration-500">{user.name}</h2>
                  <p className="font-bold text-red-500 !font-dosis">{user.id}$</p>
             </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
