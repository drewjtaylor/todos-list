const ListItem = ({item}) => {
    const {title, description, completed} = item;
  
  
    if (!completed) {
        return (
            <div className="item">
                <div className="item-title">{title}</div>
                <div className="item-description">{description}</div>
            </div>
      )
    } else {
        return (
            <div className="item">
            <div className="item-title completed">{title}</div>
            <div className="item-description completed">{description}</div>
            </div>
      )

    }
  
}

export default ListItem