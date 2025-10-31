import React from 'react';

// Создаем "страничку" - это функция, которая возвращает то, что мы увидим
function Gallery() {    
  return (
    <>

    <h1>Responsive Image Gallery (Grid)</h1>

    <div class="gallery">
    <img src="https://picsum.photos/300?1"/>
    <img src="https://picsum.photos/300?2"/>
    <img src="https://picsum.photos/300?3"/>
    <img src="https://picsum.photos/300?4"/>
    <img src="https://picsum.photos/300?5"/>
    <img src="https://picsum.photos/300?6"/>
    <img src="https://picsum.photos/300?7"/>
    <img src="https://picsum.photos/300?8"/>
    </div>


    </>
  );
}

// Делаем нашу "страничку" доступной для использования в других файлах
export default Gallery;