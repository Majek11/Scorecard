import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCandidates: [],
    points: {}
}

const handlePoints = (prevPoints, newPoint) => {
    let points = prevPoints
    points[newPoint.candidateName] = points[newPoint.candidateName].filter(point => point.question !== newPoint.question)
    points[newPoint.candidateName].push(newPoint)
    return points
}

export const scorecardSlice = createSlice({
    name: 'scorecard',
    initialState,
    reducers: {
        addSelectedCandidate (state, action) {
            let newCandidate = action.payload.candidate
            state.selectedCandidates = Array.from(new Set([...state.selectedCandidates, newCandidate]))
            state.points[newCandidate.name] = []
        },
        removeSelectedCandidate (state, action) {
            state.selectedCandidates = state.selectedCandidates.filter(candidate => candidate.name !== action.payload.candidate)
        },
        addPointsToCandidate (state, action) { 
            state.points = handlePoints(state.points, action.payload.point)
        }
    }
})

export const { addSelectedCandidate, removeSelectedCandidate, addPointsToCandidate } = scorecardSlice.actions
export default scorecardSlice.reducer
