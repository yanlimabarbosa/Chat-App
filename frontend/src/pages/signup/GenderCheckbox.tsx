export function GenderCheckbox() {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox border-slate-900 " />
        </label>
      </div>
      <div className="flex flex-col">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox border-slate-900 " />
        </label>
      </div>
    </div>
  )
}
