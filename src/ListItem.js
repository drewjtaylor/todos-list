const ListItem = ({item}) => {
    const {title, description, completed} = item;
  
  
    if (!completed) {
        return (
        <>
            <div className="item-title">{title}</div>
            <div className="item-description">{description}</div>
        </>
      )
    } else {
        return (
        <>
            <div className="item-title">{title}</div>
            <div className="item-description">{description}</div>
        </>
      )
        
    }
  
}

export default ListItem