export function TwitterFollowCard ([ userName, name, isfollowing]) {

return(

    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img
                className='tw-followCard-avatar' 
                src= {`https://unavatar.io/${userName}`}
                alt="avatar random" />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>

                <span className='tw-followCard-infoUserName'>@srrandom</span>
            </div>
        </header>
        <aside>
            <button className='tw-followCard-button'>
                Seguir
            </button>
        </aside>
    </article>
    
    )
}