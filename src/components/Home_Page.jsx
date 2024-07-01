import React from 'react'
import Button from '@mui/material/Button';
function Home_Page() {
  return (
<>
<div className='homepage bg-[#F8F7F1] h-[790px]'>
<div className='container'>
<div className='header flex justify-between items-center py-5'>
<a href=""><img src="image 5.png" alt="" /></a>
<div className='flex justify-center items-center gap-10'>
<p className='popins font-medium text-[18px] text-[#A5A1B3] hover:text-[#1A1A1A] transition'>Payday Loans</p>
<p className='popins font-medium text-[18px] text-[#A5A1B3] hover:text-[#1A1A1A] transition'>Transacion</p>
<p className='popins font-medium text-[18px] text-[#A5A1B3] hover:text-[#1A1A1A] transition'>Cards</p>
<p className='popins font-medium text-[18px] text-[#A5A1B3] hover:text-[#1A1A1A] transition'>Payment</p>
<p className='popins font-medium text-[18px] text-[#A5A1B3] hover:text-[#1A1A1A] transition'>Contact Us</p>

</div>
<Button className='w-[148px]' variant="contained" color="success">
        Email
      </Button>
</div>

<div className='homage2 flex justify-center items-center gap-20'>
<div className='mt-[170px]'>
<h2 className='popins font-medium text-[18px] text-[#000000]'>Payday loans</h2>
<h1 className='museo font-bold text-[77px] text-[#0D161B] w-[604px] leading-[88px]'>Fast on cash 100% Sure safe.</h1>
<p className='popins font-normal text-[20px] text-[#777383] leading-[50px]'>anywhere is sold available money this bank for your safety</p>
<button className='button-32'>Request a Loan</button>
</div>
<div className='mt-[170px]'>
<img className='bg-[#fff000] imw transition' src="https://preview.colorlib.com/theme/personal/img/about-img.png" alt="" />
</div>
</div>
</div>
</div>
</>
)
}

export default Home_Page