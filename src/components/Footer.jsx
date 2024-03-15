function Footer() {
    return (
<footer className='p-4 flex flex-col'>
    <div>
        <h3 className='p-2 text-center'>Follow us on:</h3>
        <div className='flex justify-center'>
            <a href="https://www.facebook.com/nancystamales"><img src="/images/icons8-facebook-96.png" alt="Facebook Logo" /></a>
            <a href="https://www.instagram.com/temeculasalsaco/"><img src="/images/icons8-instagram-96.png" alt="Instagram Logo" /></a>
        </div>
        <div className='flex justify-center p-4'>
        <p className='franklin'>©️ 2024 Temecula Salsa Co All Rights Reserved</p>
    </div>
    </div>
</footer>
    )
}

export default Footer