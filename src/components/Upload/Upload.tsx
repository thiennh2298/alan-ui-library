import React from 'react';
import cx from 'classnames';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {

}

export const Upload = () => {
  const handleUpload = (e) => {
    console.log('test: ', e.target.value)
  }

  return <div className="w-56 h-56 border border-gray-4 rounded-xl flex justify-center items-center">
    <label htmlFor="file-upload" className=''>Upload here</label>
    <input id="file-upload" type="file" onChange={(e) => handleUpload(e)} hidden />
    <img />
  </div>
}