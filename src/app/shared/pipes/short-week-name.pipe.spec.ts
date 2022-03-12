import { ShortWeekNamePipe } from './short-week-name.pipe';

fdescribe('ShortWeekNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ShortWeekNamePipe();
    expect(pipe).toBeTruthy();
  });
  it('should truncate the Day name to 3 letters only', () => {
    const pipe = new ShortWeekNamePipe();
    const day="Tuesday"
    const result = pipe.transform(day);
    expect(result.length).toBe(3);
    expect(result).toBe('Tue');
    });
    it('should return empty if there is no values', () => {
      const pipe = new ShortWeekNamePipe();
      const day=""
      const result = pipe.transform(day);
      expect(result).toBe(null);
      });
});
