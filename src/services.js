import EventRepository from "./repository";
import Event from "./models";

export default class EventService {

    /**
     * The event repository
     * @type {EventRepository}
     */
    _eventRepository;

    /**
     *
     * @param {EventRepository} eventRepository
     */
    constructor(eventRepository) {
        this._eventRepository = eventRepository;
    }

    /**
     * Return all events
     * @return {Event[]}
     */
    getEvents() {
        return this._eventRepository.getAll();
    }

    getFirstEvent() {
        let evts = this.getEvents()
        let dates = [];
        evts.forEach(function (event) {
            dates.push(event.startTime)
            return dates;
        })
        let sortedDates = dates.sort();
        return sortedDates[0];
    }

    getLastEvent() {
        let evts = this.getEvents()
        let dates = [];
        evts.forEach(function (event) {
            dates.push(event.startTime)
            return dates;
        })
        let sortedDates = dates.sort();
        return sortedDates[2];
    }


    getLongestEvent() {
        return null; //TODO
    }

    getShortestEvent() {
        return null; //TODO
    }

    // A implementer en TDD
    /**
     *
     * @param {Date} time
     * @return {Event[]}
     */
    hasEventOn(time) {
        let evts = this._eventRepository.getAll();
        return evts.filter(function (e) {
            return time >= e.getStartTime() && time <= e.getEndTime();
        });
    }

    // A implementer en TDD

    getEventByTitle(title) {
        return null
    }

    // A implementer en TDD

    isLocationAvailable(time) {
    }

    getCurrentEvents() {
        let now = Date.now();
        return this.hasEventOn(new Date(now));
    }

}