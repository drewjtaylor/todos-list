const ListItem = ({item}) => {
    const {title, description, completed} = item;


        return (
            <>
                <h3 className={completed ? "item-title" : "item-title completed"}>{title}</h3>
                <h5 className={completed ? "item-description" : "item-description completed"}>{description}</h5>
            </>
        )
}

export default ListItem