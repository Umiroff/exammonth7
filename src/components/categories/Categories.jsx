import React, { useRef } from "react";
import {
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation
} from "../../context/categoryApi";

const Categories = () => {
  let { data, isLoading, isError } = useGetCategoryQuery();
  let [
    createCategory,
    {
      isLoading: loadingCreateCategory,
      data: dataCreateCategory,
      isError: isErrorCreateCategory,
      error
    },
  ] = useCreateCategoryMutation();

  // console.log("dataCreateCategory>>>>", dataCreateCategory);
  // console.log("isErrorCreateCategory>>>>", isErrorCreateCategory);
  // console.log("error>>>>", error);

  let [deleteCategory, {}] = useDeleteCategoryMutation()




  const title = useRef();

  const handleCreateCategory = (e) => {
    e.preventDefault();
    let category = {
      title: title.current.value,
    };
    createCategory(category);
    title.current.value = ""
  };

  const handleDeleteCategory = (id) => {
    deleteCategory(id)
  }



  let categories = data?.data?.map((el, inx) => (
    <div key={el.id}>
      <span>{inx + 1}. {el.title}</span>
      <button onClick={()=> handleDeleteCategory(el.id)}>delete</button>
    </div>
  ));
  return (
    <div>
      <h2>Categories</h2>
      <form onSubmit={handleCreateCategory} action="">
        <input ref={title} type="text" />
        <button disabled={loadingCreateCategory}>Create</button>
      </form>
      {isLoading ? <h2>Loading...</h2> : <></>}

      <div>{categories}</div>
    </div>
  );
};

export default Categories;
