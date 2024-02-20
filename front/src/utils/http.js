// zctracli TO FIND AND GET USER ID
export const fetchId = async (dataToPost) => {
  const response = await fetch("http://localhost:3000/zctracli", {
    method: "POST",
    body: JSON.stringify(dataToPost),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return resData;
};

// zctraptf TO FIND ALL PTF WITH USER ID
export const fetchPtf = async (dataToPost) => {
  try {
    const response = await fetch("http://localhost:3000/zctraptf", {
      method: "POST",
      body: JSON.stringify(dataToPost),
      headers: {
        "x-access-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error:", errorData); // Log the error response data
      throw new Error("Something went wrong");
    }

    const resData = await response.json();
    // console.log("Response from server:", resData); // Log the response data
    return resData;
  } catch (error) {
    console.error("Error:", error); // Log any errors that occur during the request
    throw new Error("Something went wrong");
  }
};

// zope TO FIND ALL OPE WITH USER ID
export const fetchOpe = async (dataToPost) => {
  try {
    const response = await fetch("http://localhost:3000/zope", {
      method: "POST",
      body: JSON.stringify(dataToPost),
      headers: {
        "x-access-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error:", errorData); // Log the error response data
      throw new Error("Something went wrong");
    }
    const resData = await response.json();

    return resData;
  } catch (error) {
    console.error("Error:", error); // Log any errors that occur during the request
    throw new Error("Something went wrong");
  }
};

// zlignptf TO FIND ALL LIGNS WITH PTF ID
export const fetchLign = async (dataToPost) => {
  const response = await fetch("http://localhost:3000/zlignptf", {
    method: "POST",
    body: JSON.stringify(dataToPost),
    headers: {
      "x-access-token": localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return resData;
};

// zmvt TO FIND ALL MVT WITH ASSET ID
export const fetchMvt = async (dataToPost) => {
  const response = await fetch("http://localhost:3000/zmvt", {
    method: "POST",
    body: JSON.stringify(dataToPost),
    headers: {
      "x-access-token": localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return resData;
};

// UPLOAD FILE
export const postFile = async (fileToPost, FileId) => {
  console.log("file upload", fileToPost);
  const formData = new FormData();
  formData.append("file", fileToPost);
  formData.append("FileId", FileId); // Append the document ID to the FormData

  console.log("formdata", formData.values);

  const response = await fetch("http://localhost:3000/doc/upload", {
    method: "POST",
    body: formData,
  });

  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return resData;
};

// zfile GET ONDEMAND POSTS
export const fetchOnDemandDocs = async (dataToPost) => {
  const response = await fetch("http://localhost:3000/doc/onDemand", {
    method: "POST",
    body: JSON.stringify(dataToPost),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return resData;
};

// zfile GET ONDEMAND POSTS
export const fetchSentDocs = async (dataToPost) => {
  const response = await fetch("http://localhost:3000/doc/sent", {
    method: "POST",
    body: JSON.stringify(dataToPost),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return resData;
};
