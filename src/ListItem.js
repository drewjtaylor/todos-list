const ListItem = ({item}) => {
    const {title, description, completed} = item;
  
  
    if (!completed) {
        return (
            <>
                <h3 className="item-title">{title}</h3>
                <h5 className="item-description">{description}</h5>
            </>
      )
    } else {
        return (
            <>
            <h3 className="item-title completed">{title}</h3>
            <h5 className="item-description completed">{description}</h5>
            </>
      )

    }
  
}

export default ListItem