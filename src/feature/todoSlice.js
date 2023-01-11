import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const todo = JSON.parse(localStorage.getItem('todo'));
const project = JSON.parse(localStorage.getItem('project'));
const tags = JSON.parse(localStorage.getItem('tags'));


export var initialState = {
 todo: todo ? todo : null,
 loading: false,
 success: false,
 message: '',
 isError: false,
 issearch: false,
 isdeleted: false,
 project: project ? project : null, 
 projectsearch: [],
 tagsearch: [],
 todosearch: [],
 tags: tags ? tags : null,
}
 


export const createTodo = createAsyncThunk('todo/create', async({tododata}, thunkAPI) => {
    try {
        console.log({slice: tododata})
   
        return tododata
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})


export const getTodo = createAsyncThunk('todo/get', async(_, thunkAPI) => {
    try {
        const getTodo =  JSON.parse(localStorage.getItem('todo'))
        console.log({getthunk: getTodo})
        return getTodo
       
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})


export const deleteTodo = createAsyncThunk('todo/delete', async({id}, thunkAPI) => {
    try {
      
        console.log({getthunk: id})
        return id
       
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

export const createProject = createAsyncThunk('todo/project', async({projectdata}, thunkAPI) => {
    try {
        console.log({sliceheight: projectdata})
   
        return projectdata
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})


export const deleteProject = createAsyncThunk('project/delete', async({name}, thunkAPI) => {
    try {
      
        console.log({getthunk: name})
        return name
       
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})


export const getProject = createAsyncThunk('todo/getproject', async(_, thunkAPI) => {
    try {
        const getproject =  JSON.parse(localStorage.getItem('project'))
        console.log({getthunkproject: getProject})
        return getproject
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

export const pushToProject = createAsyncThunk('todo/pushproject', async({projectdata}, thunkAPI) => {
    try {
        console.log({getthunkproject: projectdata})
        return projectdata
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})


export const findProject = createAsyncThunk('todo/findproject', async({text}, thunkAPI) => {
    try {
      
        console.log({getthunkproject: text})
        return text
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

export const sesrchTags = createAsyncThunk('todo/findtags', async({text}, thunkAPI) => {
    try {
      
        console.log({getthunktagsfind: text})
        return text
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

export const findtodo = createAsyncThunk('todo/findtodo', async({text}, thunkAPI) => {
    try {
      
        console.log({getthunktodofind: text})
        return text
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

export const findTags = createAsyncThunk('todo/findalltag', async(_, thunkAPI) => {
    try {
        
      const tagarr = [];
        const todo = JSON.parse(localStorage.getItem('todo'));
        console.log(todo)
     const tags = todo.filter((obj) => {
         const set = obj.tags
        console.log({obj: set })
        tagarr.push(set)
       return set
       })
      console.log({tagarr : tagarr})
      return tagarr;
    } catch (error) {
        const message = error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})


var todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        reset: (state, action) => {
            state.todo = ''
            state.loading = false
            state.success = false
            state.isError = false
        }
    }, 
    extraReducers: (builder) => {
        builder
        .addCase(createTodo.pending, (state, action)  => {
            state.loading = true
            console.log(action)
        })
        .addCase(createTodo.fulfilled, (state, action) => {
            console.log(action)
            state.issearch = false
            const todo = JSON.parse(localStorage.getItem('todo'));
            if(!todo){
                var arr = []
                localStorage.setItem('todo', JSON.stringify(arr))
                const todos = JSON.parse(localStorage.getItem('todo'));
                var todostorage = todos.concat(action.payload)
                console.log(todostorage)
                localStorage.setItem('todo', JSON.stringify(todostorage))
            }else{
                
                state.todo = [...todo, todo.push(action.payload)]
                localStorage.setItem('todo', JSON.stringify(todo))
                console.log(todo)
            }


           
        })
        .addCase(createTodo.rejected, (state, action)  => {
            state.loading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getTodo.pending, (state, action)  => {
            state.loading = true
        })
        .addCase(getTodo.fulfilled, (state, action)=> {
            console.log({getTodo: action})
            state.todo = action.payload
            state.isdeleted = false
            state.issearch = false
        })
        .addCase(getTodo.rejected, (state, action)  => {
            state.loading = false
            state.isError = true
            state.message = action.payload
        })
       
        .addCase(createProject.pending, (state, action)  => {
            state.loading = true
        })
        .addCase(createProject.fulfilled, (state, action)=> {
            state.issearch = false
            var findProject = JSON.parse(localStorage.getItem('project'));

            if(!findProject){
                 const newproject = {name: action.payload.name, arr:[]}
            console.log({ newproject: newproject})
            var projectarr = [];
           var newarr = projectarr.concat(newproject)
            localStorage.setItem('project', JSON.stringify(newarr))
            }else{
               var findname = findProject.find((item) => item.name === action.payload.name)
               if(findname){
                state.message = 'project name already exist';
                return;
               }

               if(!findname){
                const newproject = {name: action.payload.name, arr:[]}
                 const updatedProject = findProject.concat(newproject)
                 console.log({updatedProject: updatedProject})
                 localStorage.setItem('project', JSON.stringify(updatedProject))
               }

            }
            
        })
        .addCase(createProject.rejected, (state, action)  => {
            state.loading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getProject.pending, (state, action)  => {
            state.loading = true
        })
        .addCase(getProject.fulfilled, (state, action)=> {
            console.log({getProjectfulfilled: action})
            state.project = action.payload
            state.issearch = false

        })
        .addCase(getProject.rejected, (state, action)  => {
            state.loading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteProject.pending, (state, action)  => {
            state.loading = true
        })
        .addCase(deleteProject.fulfilled, (state, action)=> {
            console.log({deleteProjectfulfilled: action})
            state.issearch = false
            const project = JSON.parse(localStorage.getItem('project'));
            
     
        })
        .addCase(deleteProject.rejected, (state, action)  => {
            state.loading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(pushToProject.pending, (state, action)  => {
            state.loading = true
        })
        .addCase(pushToProject.fulfilled, (state, action)=> {
            console.log({pushProjectfulfilled: action})
            state.issearch = false
            const { name, time, dates, tags, title, gettime, todo, selectedfile, id }= action.payload
            var data = {  time, dates, tags, title, gettime, todo, selectedfile, id }
            console.log({ name: name})
            const project = JSON.parse(localStorage.getItem('project'));
            console.log({project: project})
            const getproject = project.map((item) => {
                if(item.name === name){
                    item.arr.push(data)
                    console.log({item: item.arr})
                    
                }
               // console.log({item: item.arr})
            } )
            console.log({getProject: project})
            
           localStorage.setItem('project', JSON.stringify(project))
     
        })
        .addCase(pushToProject.rejected, (state, action)  => {
            state.loading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(findTags.pending, (state, action)  => {
            state.loading = true
        })
        .addCase(findTags.fulfilled, (state, action)=> {
            console.log({gettagsfulfilled: action})
          
          const tag = localStorage.setItem('tags', JSON.stringify(action.payload))
          const tags = JSON.parse(localStorage.getItem('tags'));
          console.log({findedTag: tags})

            state.tags = tags
            state.issearch = false

        })
        .addCase(findTags.rejected, (state, action)  => {
            state.loading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteTodo.pending, (state, action)  => {
            state.loading = true
        })
        .addCase(deleteTodo.fulfilled, (state, action)=> {
            const todo = JSON.parse(localStorage.getItem('todo'));
            console.log({tododel: action})
            var newtodo = todo.filter((stuff) => stuff.id !== action.payload )
            console.log({deletetodofulfilled: newtodo})
            localStorage.setItem('todo', JSON.stringify(newtodo))
            state.isdeleted = true
            state.issearch = false
        })
        .addCase(deleteTodo.rejected, (state, action)  => {
            state.loading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(findProject.pending, (state, action)  => {
            state.loading = true
        })
        .addCase(findProject.fulfilled, (state, action)=> {
            state.issearch = true 
            const project = JSON.parse(localStorage.getItem('project'));
            console.log({projectsearchaction: action})
            console.log({projectsearch: project})

            let searchkey = action.payload;
             var wordquery =  searchkey.trim().split(' ');

            var re = new RegExp(wordquery.join('|'), 'i');
            var resultObj = project.filter((quote) => re.test(quote.name) );
            console.log({todopro: resultObj})

            if(!resultObj){
                state.projectsearch = []
            }else{

            }


            state.projectsearch.push(resultObj)
            const { projectsearch } = state
            

            console.log({toprosearch: projectsearch})

            
        })
        .addCase(findProject.rejected, (state, action)  => {
            state.loading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(sesrchTags.pending, (state, action)  => {
            state.loading = true
        })
        .addCase(sesrchTags.fulfilled, (state, action)=> {
            state.issearch = true
            const tags = JSON.parse(localStorage.getItem('tags'));
            console.log({ searchtapfuliled: tags})

            let searchkey = action.payload;
             var wordquery =  searchkey.trim().split(' ');

            var re = new RegExp(wordquery.join('|'), 'i');
            var resultObj = tags.filter((quote) => re.test(quote) );
            console.log({todoprotag: resultObj})

            if(!resultObj){
                state.tagsearch = []
            }else{
                state.tagsearch.push(resultObj)
            }


            
            const { tagsearch } = state
            

            console.log({tagtsearch: tagsearch})

            
        })
        .addCase(sesrchTags.rejected, (state, action)  => {
            state.loading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(findtodo.pending, (state, action)  => {
            state.loading = true
        })
        .addCase(findtodo.fulfilled, (state, action)=> {
            state.issearch = true
            const todo = JSON.parse(localStorage.getItem('todo'));
            console.log({todofoundfulfilled: todo})

            let searchkey = action.payload;
             var wordquery =  searchkey.trim().split(' ');

            var re = new RegExp(wordquery.join('|'), 'i');
            var resultObj = todo.filter((quote) => re.test(quote.todo) || re.test(quote.title) || re.test(quote.tags) );
            console.log({todofulfilled: resultObj})


            state.todosearch.push(resultObj)
            const { todosearch } = state
            

            console.log({toprosearch: todosearch})

            
        })
        .addCase(findtodo.rejected, (state, action)  => {
            state.loading = false
            state.isError = true
            state.message = action.payload
        })

    }
})

export const { reset } = todoSlice.actions

export default todoSlice.reducer;