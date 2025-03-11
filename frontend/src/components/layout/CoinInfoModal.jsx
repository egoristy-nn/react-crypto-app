import {Divider, Flex, Tag, Typography} from 'antd'
import CoinInfo from './CoinInfo'

export default function CoinInfoModel ({coin}) {
    return (
    <>
        <CoinInfo coin={coin} withSymbol={true}/>
        <Divider/>
        <Typography.Paragraph>
            <Typography.Text>
                <Typography.Text strong>1 hour: </Typography.Text>
                <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>{coin.priceChange1h}%</Tag>
            </Typography.Text>
            <Typography.Text>
                <Typography.Text strong>1 day: </Typography.Text>
                <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>{coin.priceChange1d}%</Tag>
            </Typography.Text>
            <Typography.Text>
                <Typography.Text strong>1 week: </Typography.Text>
                <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>{coin.priceChange1w}%</Tag>
            </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph>
            <Typography.Text strong>
                Price: {coin.price.toFixed(2)}$
            </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph>
            <Typography.Text strong>
                Price BTC: {coin.priceBtc}
            </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph>
            <Typography.Text strong>
                Market Cap: {coin.marketCap}$
            </Typography.Text>
        </Typography.Paragraph>
        {coin.contractAddress &&
            <Typography.Paragraph>
            <Typography.Text strong>
                Contract Address: {coin.contractAddress}
            </Typography.Text>
        </Typography.Paragraph>
        }
    </>
    )
}