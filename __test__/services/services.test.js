import axios from "axios";

import {
  getStarshipListData,
  getStarshipDetail,
  searchStarship,
  getPage,
} from "../../src/services/index";

jest.mock("axios");

describe("Services", () => {
  axios.get.mockImplementation(() => {
    return Promise.resolve({
      data: {
        count: 36,
        next: "https://swapi.dev/api/starships/?page=3",
        previous: "https://swapi.dev/api/starships/?page=1",
        results: [
          {
            model: "CR90 corvette",
            name: "CR90 corvette",
            url: "https://swapi.dev/api/starships/2/",
          },
          {
            model: "Sentinel-class landing craft",
            name: "Sentinel-class landing craft",
            url: "https://swapi.dev/api/starships/5/",
          },
        ],
      },
    });
  });
  const expectedStarshipList = {
    count: 36,
    next: "https://swapi.dev/api/starships/?page=3",
    previous: "https://swapi.dev/api/starships/?page=1",
    results: [
      {
        model: "CR90 corvette",
        name: "CR90 corvette",
        url: "https://swapi.dev/api/starships/2/",
      },
      {
        model: "Sentinel-class landing craft",
        name: "Sentinel-class landing craft",
        url: "https://swapi.dev/api/starships/5/",
      },
    ],
  };

  describe("getStarshipListData", () => {
    it("should return starship list", async () => {
      expect(await getStarshipListData()).toEqual(expectedStarshipList);
    });

    it("should retun error message when promise reject", async () => {
      axios.get.mockImplementationOnce(() => {
        return Promise.reject("network error");
      });
      expect(await getStarshipListData()).toBe("network error");
    });
  });

  describe("getPage", () => {
    it("should return starship list", async () => {
      expect(await getPage(2)).toEqual(expectedStarshipList);
    });

    it("should retun error message when promise reject", async () => {
      axios.get.mockImplementationOnce(() => {
        return Promise.reject("network error");
      });
      expect(await getPage(2)).toBe("network error");
    });
  });

  describe("searcStarship", () => {
    it("should return starship list", async () => {
      expect(await searchStarship()).toEqual(expectedStarshipList);
    });

    it("should retun error message when promise reject", async () => {
      axios.get.mockImplementationOnce(() => {
        return Promise.reject("network error");
      });
      expect(await searchStarship()).toBe("network error");
    });
  });

  describe("getStarshipDetail", () => {
    it("should return starship detail", async () => {
      axios.get.mockImplementation(() => {
        return Promise.resolve({
          data: {
            model: "CR90 corvette",
            name: "CR90 corvette",
            url: "https://swapi.dev/api/starships/2/",
          },
        });
      });

      const expectedStarshipDetail = {
        model: "CR90 corvette",
        name: "CR90 corvette",
        url: "https://swapi.dev/api/starships/2/",
      };

      expect(await getStarshipDetail(2)).toEqual(expectedStarshipDetail);
    });

    it("should return error message when data not arrived", async () => {
      axios.get.mockImplementationOnce(() => {
        return Promise.reject("network error");
      });
      expect(await getStarshipDetail()).toBe("network error");
    });
  });
});
