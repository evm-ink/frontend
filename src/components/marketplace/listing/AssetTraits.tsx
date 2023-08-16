import { Inscription_Traits } from '@/gql/operations-types'
import clsx from 'clsx'

interface AssetTraitsProps {
  className?: string
}

const traits: Inscription_Traits[] = [
  {
    trait_type: 'Test Trait 1',
    trait_percent: '25',
    trait_value: 'Some Value 1',
    display_type: '',
    trait_value_count: '',
    trx_hash: '',
  },
  {
    trait_type: 'Test Trait 2',
    trait_percent: '50',
    trait_value: 'Some Value 2',
    display_type: '',
    trait_value_count: '',
    trx_hash: '',
  },
  {
    trait_type: 'Test Trait 2',
    trait_percent: '50',
    trait_value: 'Some Value 2',
    display_type: '',
    trait_value_count: '',
    trx_hash: '',
  },
  {
    trait_type: 'Test Trait 1',
    trait_percent: '25',
    trait_value: 'Some Value 1',
    display_type: '',
    trait_value_count: '',
    trx_hash: '',
  },
  {
    trait_type: 'Test Trait 2',
    trait_percent: '50',
    trait_value: 'Some Value 2',
    display_type: '',
    trait_value_count: '',
    trx_hash: '',
  },
  {
    trait_type: 'Test Trait 2',
    trait_percent: '50',
    trait_value: 'Some Value 2',
    display_type: '',
    trait_value_count: '',
    trx_hash: '',
  },
  {
    trait_type: 'Test Trait 2',
    trait_percent: '50',
    trait_value: 'Some Value 2',
    display_type: '',
    trait_value_count: '',
    trx_hash: '',
  },
]
const AssetTraits = ({ className }: AssetTraitsProps): JSX.Element => {
  return (
    <div className={clsx('flex flex-wrap gap-2', className)}>
      {traits.map((trait, i) => (
        <AssetTrait key={i} {...trait} />
      ))}
    </div>
  )
}

export default AssetTraits

const AssetTrait = (trait: Inscription_Traits) => {
  return (
    <div className="bg-gray-50 hover:bg-white border-2 border-gray-200 rounded-lg grow min-w-[25%] h-fit flex flex-col items-center justify-center shadow-sm p-2 text-gray-500 text-sm gap-1">
      <h4 className="font-medium">{trait.trait_type}</h4>
      <h4 className="font-semibold text-black">{trait.trait_value}</h4>
      <p className="text-normal">{trait.trait_percent}% have this trait</p>
    </div>
  )
}
