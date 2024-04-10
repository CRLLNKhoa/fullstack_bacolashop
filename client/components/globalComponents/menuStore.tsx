import React from 'react'
import CategoriesButton from './categoriesButton'
import CategoriesList from './categoriesList'

const MenuStore = () => {
  return (
    <div className='w-full border-b hidden lg:block'>
      <div className='max-w-[1200px] mx-auto px-[15px] pt-6 pb-4'>
        <div className='flex items-center justify-between'>
          <CategoriesButton />
          <CategoriesList />
        </div>
      </div>
    </div>
  )
}

export default MenuStore