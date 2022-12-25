const ListItem = ({item}) => {
    const {title, description, completed} = item;


        return (
            <>
                <h3 className={!completed ? "item-title" : "item-title completed"}>{title}</h3>
                <p className={!completed ? "item-description" : "item-description completed"}>{description}</p>
            </>
        )
}

export default ListItem