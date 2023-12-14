export  const handleDeleteImgFromMongoDB = async (data, id, item, func) => {
    const newArr = data.imgs.filter((el) => el !== item);
    try {
      await fetch(`/api/apartments/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          imgs: newArr,
        }),
      });
      // автоматически обновляет страницу при изменении кол-ва карточек
      func();
    } catch (error) {
      console.log(error);
    }
  };