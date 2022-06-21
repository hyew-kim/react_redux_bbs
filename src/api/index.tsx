import axios from 'axios';

const API = "https://api.realworld.io/api";

const registUser = (userName:string, email:string, password:string) => {
    debugger
    const data = {
        user : {
            username: userName,
            email: email,
            password: password,
        }
    };
    const config = {
        method: 'post',
        url: `${API}/users`,
        data: data
    }
    return axios(config);
}

const loginUser = (email:string, password:string) => {
    debugger
    const data = {
        user : {
            email: email,
            password: password,
        }
    };
    const config = {
        method: 'post',
        url: `${API}/users/login`,
        data: data
    }
    return axios(config);
}

const getCurrentUser= (token:string) => {
    const header = {
        "Authorization": token
    };
    const config = {
        method: 'get',
        url: `${API}/user`,
        header: header
    }
    return axios(config);
}

const getProfile = (username:string) => {
    const config = {
        method: 'get',
        url: `${API}/profiles/username`,
    }
    return axios(config);    
}
const unfollowUser  = (username:string) => {
    const config = {
        method: 'delete',
        url: `${API}/profiles/username/follow`,
    }
    return axios(config);    
}

const getArticles = (username:string) => {
    // filter by 추가 예정
    // const filters = ['tag', 'author', 'favorited', 'limit', 'offset']
    const config = {
        method: 'get',
        url: `${API}/articles`,
    }
    return axios(config);    
}

const getArticle = (slug:string) => {
    const config = {
        method: 'get',
        url: `${API}/articles/${slug}`,
        // authentication required
    }
    return axios(config);    
}

const feedArticles = () => {
    // filter by 추가 예정
    // const filters = ['limit', 'offset']
    const config = {
        method: 'get',
        url: `${API}/articles`,
        // authentication required
    }
    return axios(config);    
}

const createArticle = (article:Object) => {
    const config = {
        method: 'get',
        url: `${API}/articles`,
        data: article,
        // authentication required
    }
    return axios(config);    
}

const updateArticle = (slug:string, article:Object) => {
    const config = {
        method: 'get',
        url: `${API}/articles/${slug}`,
        data: article,
        // authentication required
    }
    return axios(config);    
}

const deleteArticle = (slug:string) => {
    const config = {
        method: 'delete',
        url: `${API}/articles/${slug}`,
        // Auth required
    }
    return axios(config);    
}


const addCommentOnArticle= (slug:string,body:string) => {
    const data = {
        "comment" : {
            body
        }
    };
    const config = {
        method: 'post',
        url: `${API}/articles/${slug}/comments`,
        data: data,
    }
    return axios(config);    
}

const getCommentFronArticle= (slug:string) => {
    const config = {
        method: 'post',
        url: `${API}/articles/${slug}/comments`,
    }
    return axios(config);    
}

const deleteComment = (slug:string, id:number) => {
    const config = {
        method: 'delete',
        url: `${API}/articles/${slug}/comments/${id}`,
    //auth required
    }
    return axios(config);    
}

const favoriteArticle = (slug:string) => {
    const config = {
        method: 'post',
        url: `${API}/articles/${slug}/favorite`,
    //auth required
    // reutrn Article
    }
    return axios(config);  
}

const unFavoriteArticle = (slug:string) => {
    const config = {
        method: 'delete',
        url: `${API}/articles/${slug}/favorite`,
    //auth required
    // reutrn Article
    }
    return axios(config);  
}

const getTags = () => {
    const config = {
        method: 'get',
        url: `${API}/api/tags`
    }
    return axios(config);
}
export {
    registUser,
    loginUser,
    getCurrentUser,
    getProfile,
    unfollowUser,
    getArticles,
    getArticle,
    feedArticles,
    createArticle,
    updateArticle,
    deleteArticle,
    addCommentOnArticle,
    getCommentFronArticle,
    deleteComment,
    favoriteArticle,
    unFavoriteArticle, 
    getTags
}