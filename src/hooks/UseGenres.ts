// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import apiClient from "../services/api-client";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// interface FetchGenresResponse {
//   count: number;
//   results: Genre[];
// }
const useGenres = () => useData<Genre>("/genres");
// {
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, seterror] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true);
//     apiClient
//       .get<FetchGenresResponse>("/genres", { signal: controller.signal })
//       .then((res) => {
//         setGenres(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (axios.isCancel(err)) return;
//         seterror(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { genres, error, isLoading };
// };

export default useGenres;
