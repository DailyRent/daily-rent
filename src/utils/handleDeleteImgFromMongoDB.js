// удаляет одно фото из массива фоток
// data - данные по квартире
// id - динамический параметр страницы, он же родительский элемент, по которому делается запрос
// item - значение выбранной фотки (publicId)
// func - в данном случае mutate from fetcher

export const handleDeleteImgFromMongoDB = async (data, id, item, func) => {
  const newArr = data.imgs.filter((el) => el !== item);
  try {
    await fetch(`/api/apartments/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        imgs: newArr,
      }),
    });
    // автоматически обновляет страницу при изменении кол-ва карточек (mutate from fetcher)
    func();
  } catch (error) {
    console.log(error);
  }
};