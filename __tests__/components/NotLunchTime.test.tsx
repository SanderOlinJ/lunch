import { render, screen } from "@testing-library/react";
import NotLunchTime from "@/components/NotLunchTime";
import '@testing-library/jest-dom';

describe("NotLunchTime", () => {

    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    const setMockDate = (mockDate: string) => {
        jest.setSystemTime(new Date(mockDate));
    };

    it("renders without crashing", () => {
        render(<NotLunchTime />);
        const heading = screen.getByText(/Det er ikke lunsj/);
        expect(heading).toBeInTheDocument();
    });

    describe("Monday", () => {
        it("displays correct time until next lunch at 07:00", () => {
            setMockDate('2024-08-19T07:00:00');
            render(<NotLunchTime />);
            const timerText = screen.getByText(/4t 0m 0s/);
            expect(timerText).toBeInTheDocument();
        });

        it("displays correct time until next lunch at 12:30", () => {
            setMockDate('2024-08-19T12:30:00');
            render(<NotLunchTime />);
            const timerText = screen.getByText(/22t 30m 0s/);
            expect(timerText).toBeInTheDocument();
        });
    });

    describe("Tuesday", () => {
        it("displays correct time until next lunch at 07:00", () => {
            setMockDate('2024-08-20T07:00:00');
            render(<NotLunchTime />);
            const timerText = screen.getByText(/4t 0m 0s/);
            expect(timerText).toBeInTheDocument();
        });

        it("displays correct time until next lunch at 12:30", () => {
            setMockDate('2024-08-20T12:30:00');
            render(<NotLunchTime />);
            const timerText = screen.getByText(/22t 30m 0s/);
            expect(timerText).toBeInTheDocument();
        });
    });

    describe("Wednesday", () => {
        it("displays correct time until next lunch at 07:00", () => {
            setMockDate('2024-08-21T07:00:00');
            render(<NotLunchTime />);
            const timerText = screen.getByText(/4t 0m 0s/);
            expect(timerText).toBeInTheDocument();
        });

        it("displays correct time until next lunch at 12:30", () => {
            setMockDate('2024-08-21T12:30:00');
            render(<NotLunchTime />);
            const timerText = screen.getByText(/22t 30m 0s/);
            expect(timerText).toBeInTheDocument();
        });
    });

    describe("Thursday", () => {
        it("displays correct time until next lunch at 07:00", () => {
            setMockDate('2024-08-22T07:00:00');
            render(<NotLunchTime />);
            const timerText = screen.getByText(/4t 0m 0s/);
            expect(timerText).toBeInTheDocument();
        });

        it("displays correct time until next lunch at 12:30", () => {
            setMockDate('2024-08-22T12:30:00');
            render(<NotLunchTime />);
            const timerText = screen.getByText(/22t 30m 0s/);
            expect(timerText).toBeInTheDocument();
        });
    });

    describe("Friday", () => {
        it("displays correct time until next lunch at 07:00", () => {
            setMockDate('2024-08-23T07:00:00');
            render(<NotLunchTime />);
            const timerText = screen.getByText(/4t 0m 0s/);
            expect(timerText).toBeInTheDocument();
        });

        it("displays correct time until next lunch at 12:30", () => {
            setMockDate('2024-08-23T12:30:00');
            render(<NotLunchTime />);
            const timerText = screen.getByText(/2d 22t 30m 0s/);
            expect(timerText).toBeInTheDocument();
        });
    });

    describe("Saturday", () => {
        it("displays correct time until next lunch at 07:00", () => {
            setMockDate('2024-08-24T07:00:00');
            render(<NotLunchTime />);
            const timerText = screen.getByText(/2d 4t 0m 0s/);
            expect(timerText).toBeInTheDocument();
        });

        it("displays correct time until next lunch at 12:30", () => {
            setMockDate('2024-08-24T12:30:00');
            render(<NotLunchTime />);
            const timerText = screen.getByText(/1d 22t 30m 0s/);
            expect(timerText).toBeInTheDocument();
        });
    });

    describe("Sunday", () => {
        it("displays correct time until next lunch at 07:00", () => {
            setMockDate('2024-08-25T07:00:00');
            render(<NotLunchTime />);
            const timerText = screen.getByText(/1d 4t 0m 0s/);
            expect(timerText).toBeInTheDocument();
        });

        it("displays correct time until next lunch at 12:30", () => {
            setMockDate('2024-08-25T12:30:00');
            render(<NotLunchTime />);
            const timerText = screen.getByText(/22t 30m 0s/);
            expect(timerText).toBeInTheDocument();
        });
    });
});
