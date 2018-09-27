import Immutable from 'seamless-immutable';

// Types
export const Types = {
  GET_REQUEST: 'albums/GET_REQUEST',
  GET_SUCCESS: 'albums/GET_SUCCESS',
  GET_FAILURE: 'albums/GET_FAILURE',
};

const albums2 =
[
  {
    "id": 0,
    "title": "Hybrid Theory",
    "author": "Linkin Park",
    "thumbnail": "https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg",
    "songs": [
      {
        "id": 0,
        "title": "Papercut",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/1.mp3"
      },
      {
        "id": 1,
        "title": "One Step Closer",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/2.mp3"
      },
      {
        "id": 2,
        "title": "With You",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/3.mp3"
      },
      {
        "id": 3,
        "title": "Points of Authority",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/4.mp3"
      },
      {
        "id": 4,
        "title": "Crawling",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/5.mp3"
      }
    ]
  },
  {
    "id": 1,
    "title": "Greatest Hits",
    "author": "Foo Fighters",
    "thumbnail": "https://s3-sa-east-1.amazonaws.com/gonative/foo_fighters.jpg",
    "songs": [
      {
        "id": 0,
        "title": "Papercut",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/1.mp3"
      },
      {
        "id": 1,
        "title": "One Step Closer",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/2.mp3"
      },
      {
        "id": 2,
        "title": "With You",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/3.mp3"
      },
      {
        "id": 3,
        "title": "Points of Authority",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/4.mp3"
      },
      {
        "id": 4,
        "title": "Crawling",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/5.mp3"
      }
    ]
  },
  {
    "id": 2,
    "title": "Live from Villa Mix",
    "author": "Alok",
    "thumbnail": "https://s3-sa-east-1.amazonaws.com/gonative/alok.jpg",
    "songs": [
      {
        "id": 0,
        "title": "Papercut",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/1.mp3"
      },
      {
        "id": 1,
        "title": "One Step Closer",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/2.mp3"
      },
      {
        "id": 2,
        "title": "With You",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/3.mp3"
      },
      {
        "id": 3,
        "title": "Points of Authority",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/4.mp3"
      },
      {
        "id": 4,
        "title": "Crawling",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/5.mp3"
      }
    ]
  },
  {
    "id": 3,
    "title": "Hybrid Theory",
    "author": "Linkin Park",
    "thumbnail": "https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg",
    "songs": [
      {
        "id": 0,
        "title": "Papercut",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/1.mp3"
      },
      {
        "id": 1,
        "title": "One Step Closer",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/2.mp3"
      },
      {
        "id": 2,
        "title": "With You",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/2.mp3"
      },
      {
        "id": 3,
        "title": "Points of Authority",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/3.mp3"
      },
      {
        "id": 4,
        "title": "Crawling",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/5.mp3"
      }
    ]
  },
  {
    "id": 4,
    "title": "Live from Villa Mix",
    "author": "Alok",
    "thumbnail": "https://s3-sa-east-1.amazonaws.com/gonative/alok.jpg",
    "songs": [
      {
        "id": 0,
        "title": "Papercut",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/1.mp3"
      },
      {
        "id": 1,
        "title": "One Step Closer",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/2.mp3"
      },
      {
        "id": 2,
        "title": "With You",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/3.mp3"
      },
      {
        "id": 3,
        "title": "Points of Authority",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/4.mp3"
      },
      {
        "id": 4,
        "title": "Crawling",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/5.mp3"
      }
    ]
  },
  {
    "id": 5,
    "title": "Greatest Hits",
    "author": "Foo Fighters",
    "thumbnail": "https://s3-sa-east-1.amazonaws.com/gonative/foo_fighters.jpg",
    "songs": [
      {
        "id": 0,
        "title": "Papercut",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/1.mp3"
      },
      {
        "id": 1,
        "title": "One Step Closer",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/2.mp3"
      },
      {
        "id": 2,
        "title": "With You",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/3.mp3"
      },
      {
        "id": 3,
        "title": "Points of Authority",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/4.mp3"
      },
      {
        "id": 4,
        "title": "Crawling",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/5.mp3"
      }
    ]
  },
  {
    "id": 6,
    "title": "Hybrid Theory",
    "author": "Linkin Park",
    "thumbnail": "https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg",
    "songs": [
      {
        "id": 0,
        "title": "Papercut",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/1.mp3"
      },
      {
        "id": 1,
        "title": "One Step Closer",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/2.mp3"
      },
      {
        "id": 2,
        "title": "With You",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/3.mp3"
      },
      {
        "id": 3,
        "title": "Points of Authority",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/4.mp3"
      },
      {
        "id": 4,
        "title": "Crawling",
        "author": "Linkin Park",
        "file": "https://s3-sa-east-1.amazonaws.com/gonative/5.mp3"
      }
    ]
  }
];


const INITIAL_STATE = Immutable({
  data: albums2,
  loading: false,
  error: null,
});

// reducers
export default function albums(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { data: action.payload.data, loading: false };
    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

// creators => actions utilizadas pelo redux_saga para atualizar os reducers
export const Creators = {
  getAlbumsRequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getAlbumsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getAlbumsFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
  }),
};
