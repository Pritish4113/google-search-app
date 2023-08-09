import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyCZHWbR_QgJe8rKj5Tl8qLX2l0CS_mVw5g",
  cx: "84354ce8943294848",
};

export const fetchDataFromApi = async (payload) => {
    const {data} = await axios.get(BASE_URL,{
        params : {...params, ...payload}
    })
    return data;
}



// import axios from "axios";

// export const fetchDataFromApi = (payload) => {

//     const options = {
//         method: "GET",
//         url: "https://www.googleapis.com/customsearch/v1",
//         params: {
//           key: "AIzaSyCZHWbR_QgJe8rKj5Tl8qLX2l0CS_mVw5g",
//           cx: "84354ce8943294848",
//           // q: "lectures",
//           q : `${payload.q}`
          
//         },
//       };

//   axios
//     .request(,options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };
