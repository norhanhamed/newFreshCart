import React from 'react'

export default function Pagination({
  page,
  numberOfPages,
  onPageChange,
  isFetching,
}) {
  return (
    <>
      
 <div className="flex justify-center items-center gap-2 my-8 flex-wrap">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1 || isFetching}
        className="px-4 py-2 rounded-md bg-gray-200 disabled:opacity-50"
      >
        Previous
      </button>

      {Array.from(
        { length: numberOfPages },
        (_, index) => index + 1
      ).map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          disabled={isFetching}
          className={`px-4 py-2 rounded-md ${
            page === pageNumber
              ? "bg-green-600 text-white"
              : "bg-gray-200"
          }`}
        >
          {pageNumber}
        </button>
      ))}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === numberOfPages || isFetching}
        className="px-4 py-2 rounded-md bg-gray-200 disabled:opacity-50"
      >
        Next
      </button>
    </div>

    </>
  )
}
