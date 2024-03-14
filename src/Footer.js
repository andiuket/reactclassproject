const Footer = ({item}) => {

    const today = new Date();
    const value = item.length;
    
    return (
        <footer className="footer">
            <p>{value > 0 && `${value} list item${value > 1 ? 's' : ""}`}</p>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer