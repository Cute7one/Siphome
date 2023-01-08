import styles from './styles.module.scss';

interface UserProps {
    name: string
}

const User = ({ name }: UserProps) => {
    return <p>{name}</p>
}

const Intro = () => {

    const mockedData = [
        {
            id: 1,
            name: 'Adam'
        },
        {
            id: 2,
            name: 'Alex'
        },
        {
            id: 3,
            name: 'Serj'
        },
        {
            id: 4,
            name: 'Andrew'
        },
        {
            id: 5,
            name: 'Max'
        },
    ]

    console.log('mockedData', mockedData)

    return (
        <div className={styles.container}>
            {mockedData.map((element) => {
                return (
                    <User key={element.id} name={element.name}/>
                )
            })}
        </div>
    )
}

export default Intro;