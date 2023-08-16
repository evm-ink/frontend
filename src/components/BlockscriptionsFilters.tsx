import clsx from 'clsx'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDebouncedCallback } from 'use-debounce'

interface Filter {
  label: string
  value: string
}

export const filters: Filter[] = [
  { label: 'All', value: '' },
  { label: 'Images', value: 'image' },
  { label: 'GIFs', value: 'gif' },
  { label: 'Text', value: 'text' },
  { label: 'Videos', value: 'video' },
  { label: 'Audio', value: 'audio' },
  { label: 'SVGs', value: 'svg' },
  { label: 'HTML', value: 'html' },
  { label: 'Others', value: 'other' },
  // { label: '3D', value: '3d' },
  // { label: 'Games', value: 'game' },
  // { label: 'Javascript', value: 'javascript' },
  // { label: 'Markdown', value: 'markdown' },
  // { label: '<10K', value: 'sub10k' },
  // { label: '<100K', value: 'sub100k' },
]

type Props = { className?: string }

const BlockscriptionsFilters = ({ className }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [searchValue, setSearchValue] = useState(
    searchParams.get('search') ?? ''
  )

  let contentType = searchParams.get('contentType')

  if (!filters.find((filter) => filter.value === contentType)?.value) {
    contentType = filters[0].value
  }

  const debouncedCallback = useDebouncedCallback((search: string) => {
    setSearchParams({
      ...(searchParams.get('contentType') && {
        contentType: searchParams.get('contentType') ?? '',
      }),
      ...(search && {
        search,
      }),
    })
  }, 200)

  return (
    <div
      className={clsx('w-full flex flex-col gap-5 items-center ', className)}
    >
      <form
        className="block w-full md:w-1/2 lg:w-1/3"
        onSubmit={(e) => {
          e.preventDefault()
          const search = e.currentTarget['search'].value
          setSearchValue(search)
          debouncedCallback(search)
        }}
      >
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative flex items-center">
          <input
            type="search"
            id="search"
            value={searchValue}
            onChange={(e) => {
              e.preventDefault()
              const search = e.currentTarget.value
              if (new RegExp(/^[0-9]+$/).test(search) || !search) {
                setSearchValue(search)
                debouncedCallback(search)
              }
            }}
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white"
            placeholder="Search ID # :"
          />
          <button
            type="reset"
            onClick={() => {
              setSearchValue('')
              debouncedCallback('')
            }}
            className="text-white absolute right-2.5 bg-[#0e76fd] hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Reset
          </button>
        </div>
      </form>

      <div
        className={clsx(
          'px-4 w-full flex flex-wrap gap-2 items-center justify-center'
        )}
      >
        {filters.map((filter, i) => {
          return (
            <button
              key={filter.label}
              type="button"
              onClick={() =>
                i > 0
                  ? setSearchParams({
                      contentType: filter.value,
                      search: searchValue,
                    })
                  : setSearchParams({ search: searchValue })
              }
              className={clsx(
                'font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:z-10 border shadow-sm',
                contentType === filter.value
                  ? 'text-white bg-[#0E76FD] hover:bg-blue-500 focus:outline-none focus:ring-blue-300'
                  : 'text-gray-900 focus:outline-none bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700'
              )}
            >
              {filter.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default BlockscriptionsFilters
