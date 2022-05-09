/**
 * 渡された数字を漢数字に変換する
 * 変換可能なのは整数有効範囲(Number.MIN_SAFE_INTEGER ～ Number.MAX_SAFE_INTEGER)
 * @param {数値または数字} d 
 * @returns 
 */
const digit2kan = (d, type) => {
    let result = ''
    const kDigit = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const kDDigit = ['', '壱', '弐', '参', '肆', '伍', '陸', '漆', '捌', '玖',];
    const kNumeral = ['十', '百', '千', '万', '億', '兆', '京', '垓', '𥝱', '穣', '溝', '澗', '正', '載', '極', '恒河沙', '阿僧祇', '那由他', '不可思議', '無量大数',];
    const kDNumeral = ['拾', '佰', '仟', '萬', '億', '兆', '京', '垓', '𥝱', '穣', '溝', '澗', '正', '載', '極', '恒河沙', '阿僧祇', '那由他', '不可思議', '無量大数',];
    const numeralCol = [1n, 2n, 3n, 4n, 8n, 12n, 16n, 20n, 24n, 28n, 32n, 36n, 40n, 44n, 48n, 52n, 56n, 60n, 64n, 68n];

    let kd = kDigit;
    let kn = kNumeral;
    if (type != undefined) {
        kd = kDDigit
        kn = kDNumeral
    }
    // null か 空文字が渡された場合そのまま終了
    if (d === null || d === '') {
        return result
    }
    d = BigInt(d)
    if (d === NaN) {
        // 数値に変換できなかった
        return result
    } else if (d > 999999999999999999999999999999999999999999999999999999999999999999999999n) {
        // 整数で扱える範囲外の数値だった
        return result
    } else if (d == 0) {
        result = '零'
    } else {
        for (let i = numeralCol.length - 1; i >= 0; i--) {
            let nod = 10n ** BigInt(numeralCol[i])
            // console.log(nod)
            if (d >= nod) {
                let left = d / nod
                if (left >= 10n) {
                    result += digit2kan(left)
                } else {
                    if (left == 1n && numeralCol[i] < 4n) {
                    } else {
                        result += kd[left]
                    }
                }
                result += kn[i]
                d %= nod
            }

        }
    }
    result += kd[d]
    return result
}
