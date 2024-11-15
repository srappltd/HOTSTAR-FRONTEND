import React, { useEffect, useRef, useState } from 'react'
import AccountTopbar from './AccountTopbar'
import FieldsetInput from '../../elements/FieldsetInput'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProfileEdit = () => {
  const { profile } = useSelector(state => state.AuthReducer)
  // console.log(profile)
  document.title = 'Hotstar - profile'
  const [editForm, setEditForm] = useState(profile && profile)
  useEffect(() => {
    profile && setEditForm(profile)
  }, [profile])

  const editOnChangeHandler = (e) => {
    const { name, value } = e.target
    setEditForm({ ...editForm, [name]: value })
  }
  const editOnSubmitHandler = (e) => {
    e.preventDefault()
    console.log(editForm)
    const editFormData = new FormData()
    // console.log(editFormData)
    for (var key in editForm) {
      editFormData.append(key, editForm[key]);
    }
    const { firstname, lastname, email, username, gender, dateofbirth, picture } = editForm
    if (firstname && lastname && email && username && gender && dateofbirth) {
      console.log(editFormData)
    }
  }


  const [genderIndex, setGenderIndex] = useState(-1)
  const genderSelectHanlder = (index, id) => {
    setEditForm({ ...editForm, gender: id })
    if (index == genderIndex) {
      setGenderIndex(-1)
    } else {
      setGenderIndex(index)
    }
  }
  const pickerInputRef = useRef(null)
  const pickerImageRef = useRef(null)
  const pickPickerHanlder = (e) => {
    const { files } = e.target
    setEditForm({ ...editForm, picture: files[0] })
    pickerImageRef.current.src = URL.createObjectURL(files[0])
  }
  // console.log(editForm)
  return (
    <div className='w-full h-full'>
      <AccountTopbar title={'Edit Profile'} />
      <form onSubmit={editOnSubmitHandler} className='w-full md:h-[calc(100%-56px)] py-5 md:px-10 px-4 md:flex gap-5 items-start overflow-y-auto overflow-x-hidden'>
        <div className='md:w-[35%] w-full h-full'>
          <p className='font-semibold text-base'>Profile picture</p>
          <div className='md:w-[150px] w-[100px] md:h-[150px] h-[100px] md:ml-0 m-auto relative mt-3'>
            <div className='w-[100%] h-[100%] bg-[#161b22] border border-slate-700 rounded-full overflow-hidden'>
              <img ref={pickerImageRef} src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png" className='w-full h-full object-cover' alt="" />
            </div>
            <button onClick={() => pickerInputRef.current.click()} className='px-2 flex hover:bg-[#202630] items-center transition-all focus:border-slate-500 justify-center absolute bottom-3 -right-2 border border-slate-700 bg-[#161b22] rounded-sm py-[4px] cursor-pointer font-medium text-xs'>✒️<span className='md:block hidden'>Edit</span></button>
            <input ref={pickerInputRef} onChange={pickPickerHanlder} type="file" hidden />
          </div>
        </div>
        <div className='md:w-[65%] w-full grid grid-cols-1 gap-4 pt-8 md:pt-0'>
          <FieldsetInput label={'Your Firstname'} name={'firstname'} value={editForm && editForm.firstname} placeholder={'Your firstname'} onChange={editOnChangeHandler} />
          <FieldsetInput label={'Your Lastname'} name={'lastname'} value={editForm && editForm.lastname} placeholder={'Your lastname'} onChange={editOnChangeHandler} />
          <FieldsetInput label={'Username'} name={'username'} value={editForm && editForm.username} placeholder={'Your Username'} onChange={editOnChangeHandler} />
          <FieldsetInput label={'Email'} name={'email'} type={'email'} value={editForm && editForm.email} placeholder={'Email address'} onChange={editOnChangeHandler} />
          <FieldsetInput label={'Mobile Number'} name={'mobile'} value={editForm && editForm.mobile} placeholder={'Mobile Number'} onChange={editOnChangeHandler} />
          <FieldsetInput label={'Date of Birth'} name={'dateofbirth'} value={editForm && editForm.dateofbirth} type={'date'} placeholder={'Date of Birth'} onChange={editOnChangeHandler} />
          <div className='grid grid-cols-1'>
            <label htmlFor="" className='font-medium text-xs text-slate-400'>Gender</label>
            <div className='w-full grid grid-cols-3 md:gap-4 gap-2 mt-1'>
              <button onClick={() => genderSelectHanlder(0, 'Male')} className={`md:py-2 py-[6px] px-3 w-full border ${genderIndex == 0 && 'bg-[#8230C6]'} border-slate-600 rounded flex items-center justify-center gap-1`}><span>Male</span> 👨</button>
              <button onClick={() => genderSelectHanlder(1, 'Female')} className={`md:py-2 py-[6px] px-3 w-full border ${genderIndex == 1 && 'bg-[#8230C6]'} border-slate-600 rounded flex items-center justify-center gap-1`}><span>Female</span>🚺</button>
              <button onClick={() => genderSelectHanlder(2, 'Other')} className={`md:py-2 py-[6px] px-3 w-full border ${genderIndex == 2 && 'bg-[#8230C6]'} border-slate-600 rounded flex items-center justify-center gap-1`}><span>Other</span> <i class="ri-psychotherapy-line"></i></button>
              <input type="text" className='bg-inherit hidden' value={editForm && editForm.gender} />
            </div>
          </div>
          <p className='flex items-center gap-2 text-xs text-slate-500'><i class="ri-information-2-line"></i> <Link>Why do we need this?</Link></p>
          <div className='grid grid-cols-2 md:gap-5 gap-3 mt-0'>
            <button type='reset' className={`md:py-3 py-2 px-3 w-full border border-slate-600 rounded flex items-center justify-center gap-1`}>Go Back</button>
            <button type='submit' className={`md:py-3 py-2 px-3 w-full border border-slate-600 rounded flex bg-[#8230C6] items-center justify-center gap-1`}>Save Changes</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default ProfileEdit
