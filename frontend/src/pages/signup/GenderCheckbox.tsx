export function GenderCheckbox({ value, onChange }: any) {
  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className="flex gap-3">
      <div className="flex flex-col">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            value="male"
            className="checkbox border-slate-900"
            checked={value === 'male'}
            onChange={handleGenderChange}
          />
        </label>
      </div>
      <div className="flex flex-col">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            value="female"
            className="checkbox border-slate-900"
            checked={value === 'female'}
            onChange={handleGenderChange}
          />
        </label>
      </div>
    </div>
  )
}
